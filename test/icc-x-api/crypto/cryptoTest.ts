/* make node behave */
import { IccPatientApi } from '../../../icc-api'
import { crypto } from '../../../node-compat'
import { expect } from 'chai'
import 'mocha'

import { Api } from '../../../icc-x-api'
import { Patient } from '../../../icc-api/model/Patient'
import { getEnvironmentInitializer, getEnvVariables, hcp1Username, hcp2Username, initKeys, TestVars } from '../../utils/test_utils'
import { BasicAuthenticationProvider } from '../../../icc-x-api/auth/AuthenticationProvider'

let env: TestVars | undefined

describe('Create a patient from scratch', () => {
  before(async function () {
    this.timeout(600000)
    const initializer = await getEnvironmentInitializer()
    env = await initializer.execute(getEnvVariables())
  })

  it('should create a patient in the database', async () => {
    try {
      const api = await Api(env!.iCureUrl, env!.dataOwnerDetails[hcp1Username].user, env!.dataOwnerDetails[hcp1Username].password, crypto)
      const user = await api.userApi.getCurrentUser()
      await initKeys(api, env!.dataOwnerDetails[hcp1Username].privateKey, env!.dataOwnerDetails[hcp1Username].publicKey)

      const patient = await api.patientApi.createPatientWithUser(
        user,
        await api.patientApi.newInstance(
          user,
          new Patient({
            lastName: 'Biden',
            firstName: 'Joe',
            note: 'A secured note that is encrypted',
          })
        )
      )

      console.log(
        `Created patient (decrypted): ${patient.id}: ${patient.firstName} ${patient.lastName} [note:${patient.note}, encryptedSelf:${patient.encryptedSelf}]`
      )

      const fetched = await api.patientApi.getPatientWithUser(user, patient.id)
      console.log(
        `Fetched patient (decrypted): ${fetched.id}: ${fetched.firstName} ${fetched.lastName} [note:${fetched.note}, encryptedSelf:${fetched.encryptedSelf}]`
      )

      const fetchedWithoutDecryption = await new IccPatientApi(
        env!.iCureUrl,
        {},
        new BasicAuthenticationProvider(env!.dataOwnerDetails[hcp1Username].user, env!.dataOwnerDetails[hcp1Username].password),
        fetch as any
      ).getPatient(patient.id)

      console.log(
        `Fetched patient (encrypted):${fetchedWithoutDecryption.id}: ${fetchedWithoutDecryption.firstName} ${fetchedWithoutDecryption.lastName} [note: ${fetchedWithoutDecryption.note}]`
      )
    } catch (e) {
      console.log(e)
    }
  })
})

describe('Init confidential delegation in patient', () => {
  before(async function () {
    this.timeout(600000)
    const initializer = await getEnvironmentInitializer()
    env = await initializer.execute(getEnvVariables())
  })

  it('should return a patient with a confidential delegation', async () => {
    try {
      const api = await Api(env!.iCureUrl, env!.dataOwnerDetails[hcp1Username].user, env!.dataOwnerDetails[hcp1Username].password, crypto)
      const user = await api.userApi.getCurrentUser()
      await initKeys(api, env!.dataOwnerDetails[hcp1Username].privateKey, env!.dataOwnerDetails[hcp1Username].publicKey)

      const pat = await api.patientApi.newInstance(user, { firstName: 'John', lastName: 'Doe' })
      await api.patientApi.initConfidentialDelegation(pat, user)

      const confidentialDelegationKey = await api.cryptoApi.extractPreferredSfk(pat, user.healthcarePartyId!, true)
      const nonConfidentialDelegationKey = await api.cryptoApi.extractPreferredSfk(pat, user.healthcarePartyId!, false)

      expect(confidentialDelegationKey === nonConfidentialDelegationKey).to.equal(false)
    } catch (e) {
      console.log(e)
    }
  })
})

describe('Test that patient information can be decrypted', () => {
  before(async function () {
    this.timeout(600000)
    const initializer = await getEnvironmentInitializer()
    env = await initializer.execute(getEnvVariables())
  })

  it('should return a contact with decrypted information', async () => {
    try {
      const api = await Api(env!.iCureUrl, env!.dataOwnerDetails[hcp1Username].user, env!.dataOwnerDetails[hcp1Username].password, crypto)
      const user = await api.userApi.getCurrentUser()
      await initKeys(api, env!.dataOwnerDetails[hcp1Username].privateKey, env!.dataOwnerDetails[hcp1Username].publicKey)

      const createdPat = await api.patientApi.createPatientWithUser(
        user,
        await api.patientApi.newInstance(
          user,
          new Patient({
            lastName: 'Biden',
            firstName: 'Joe',
            note: 'A secured note that is encrypted',
          })
        )
      )

      const pat = await api.patientApi.getPatientWithUser(user, createdPat.id)

      expect(pat.delegations).to.not.empty

      const contacts = await api.contactApi.findBy(user.healthcarePartyId!, pat)
      const hes = await api.healthcareElementApi.findBy(user.healthcarePartyId!, pat)

      expect(contacts).to.not.empty
      expect(hes).to.not.empty
    } catch (e) {
      console.log(e)
    }
  })
})

describe('Test that contact information can be decrypted', () => {
  before(async function () {
    this.timeout(600000)
    const initializer = await getEnvironmentInitializer()
    env = await initializer.execute(getEnvVariables())
  })

  it('should return a contact with decrypted information', async () => {
    try {
      const api = await Api(env!.iCureUrl, env!.dataOwnerDetails[hcp1Username].user, env!.dataOwnerDetails[hcp1Username].password, crypto)
      const user = await api.userApi.getCurrentUser()
      await initKeys(api, env!.dataOwnerDetails[hcp1Username].privateKey, env!.dataOwnerDetails[hcp1Username].publicKey)

      const pat = await api.patientApi.createPatientWithUser(user, await api.patientApi.newInstance(user, { firstName: 'John', lastName: 'Doe' }))
      const ctc = await api.contactApi.createContactWithUser(
        user,
        await api.contactApi.newInstance(user, pat, {
          services: [
            {
              id: api.cryptoApi.randomUuid(),
              content: { fr: { stringValue: 'Salut' }, nl: { stringValue: 'Halo' } },
            },
            {
              id: api.cryptoApi.randomUuid(),
              content: {
                fr: {
                  compoundValue: [{ content: { fr: { stringValue: 'Salut' } } }, { content: { fr: { stringValue: 'à toi' } } }],
                },
              },
            },
          ],
        })
      )
      const check = await api.contactApi.getContactWithUser(user, ctc.id)

      expect(check.services[0].content.fr.stringValue).to.equal(ctc.services[0].content.fr.stringValue)
      expect(check.services[0].content.nl.stringValue).to.equal(ctc.services[0].content.nl.stringValue)
      expect(check.services[0].encryptedSelf).to.not.be.null

      expect(check.services[1].content.fr.compoundValue[0].content.fr.stringValue).to.equal(
        ctc.services[1].content.fr.compoundValue[0].content.fr.stringValue
      )
      expect(check.services[1].content.fr.compoundValue[0].encryptedSelf).to.not.be.null

      expect(check.services[1].content.fr.compoundValue[1].content.fr.stringValue).to.equal(
        ctc.services[1].content.fr.compoundValue[1].content.fr.stringValue
      )
      expect(check.services[1].content.fr.compoundValue[1].encryptedSelf).to.not.be.null
    } catch (e) {
      console.log(e)
      throw e
    }
  })
})
describe('test that confidential helement information cannot be retrieved at MH level', () => {
  before(async function () {
    this.timeout(600000)
    const initializer = await getEnvironmentInitializer()
    env = await initializer.execute(getEnvVariables())
  })

  it('should find the confidential data only when logged as the user', async () => {
    try {
      const api = await Api(env!.iCureUrl, env!.dataOwnerDetails[hcp1Username].user, env!.dataOwnerDetails[hcp1Username].password, crypto)
      const mhapi = await Api(env!.iCureUrl, env!.dataOwnerDetails[hcp2Username].user, env!.dataOwnerDetails[hcp2Username].password, crypto)
      const user = await api.userApi.getCurrentUser()
      const mhUser = await mhapi.userApi.getCurrentUser()
      await initKeys(api, env!.dataOwnerDetails[hcp1Username].privateKey, env!.dataOwnerDetails[hcp1Username].publicKey)
      await initKeys(api, env!.dataOwnerDetails[hcp2Username].privateKey, env!.dataOwnerDetails[hcp2Username].publicKey)

      const pat = await api.patientApi.newInstance(user, { firstName: 'John', lastName: 'Doe' })
      const modifiedPatient = (await api.patientApi.initConfidentialDelegation(pat, user))!

      await api.healthcareElementApi.createHealthElement(
        await api.healthcareElementApi.newInstance(user, modifiedPatient, { descr: 'Confidential info' }, true)
      )

      const retrievedHesAsUser = await api.healthcareElementApi.findBy(user.healthcarePartyId!, modifiedPatient)
      const retrievedHesAsMh = await mhapi.healthcareElementApi.findBy(mhUser.healthcarePartyId!, modifiedPatient)

      expect(retrievedHesAsUser.length).to.equal(1, 'User should see its confidential data')
      expect(retrievedHesAsMh.length).to.equal(0, 'MH should not see confidential data')
    } catch (e) {
      console.log(e)
    }
  })
})

describe('test that confidential contact information cannot be retrieved at MH level', () => {
  before(async function () {
    this.timeout(600000)
    const initializer = await getEnvironmentInitializer()
    env = await initializer.execute(getEnvVariables())
  })

  it('should find the confidential data only when logged as the user', async () => {
    try {
      const api = await Api(env!.iCureUrl, env!.dataOwnerDetails[hcp1Username].user, env!.dataOwnerDetails[hcp1Username].password, crypto)
      const mhapi = await Api(env!.iCureUrl, env!.dataOwnerDetails[hcp2Username].user, env!.dataOwnerDetails[hcp2Username].password, crypto)
      const user = await api.userApi.getCurrentUser()
      const mhUser = await mhapi.userApi.getCurrentUser()
      await initKeys(api, env!.dataOwnerDetails[hcp1Username].privateKey, env!.dataOwnerDetails[hcp1Username].publicKey)
      await initKeys(api, env!.dataOwnerDetails[hcp2Username].privateKey, env!.dataOwnerDetails[hcp2Username].publicKey)

      const pat = await api.patientApi.newInstance(user, { firstName: 'John', lastName: 'Doe' })
      const modifiedPatient = (await api.patientApi.initConfidentialDelegation(pat, user))!

      await api.contactApi.createContactWithUser(
        user,
        await api.healthcareElementApi.newInstance(
          user,
          modifiedPatient,

          { descr: 'Confidential info', services: [], subContacts: [] },
          true
        )
      )

      await api.contactApi.createContactWithUser(
        user,
        await api.healthcareElementApi.newInstance(
          user,
          modifiedPatient,

          { descr: 'Non confidential info', services: [], subContacts: [] },
          false
        )
      )

      const retrievedCtcsAsUser = await api.contactApi.findBy(user.healthcarePartyId!, modifiedPatient)
      const retrievedCtcsAsMh = await mhapi.contactApi.findBy(mhUser.healthcarePartyId!, modifiedPatient)

      expect(retrievedCtcsAsUser.length).to.equal(2, 'User should see its confidential data')
      expect(retrievedCtcsAsMh.length).to.equal(1, 'MH should not see confidential data')
    } catch (e) {
      console.log(e)
    }
  })
})
