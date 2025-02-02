import { before } from 'mocha'

import 'isomorphic-fetch'

import { Api, IccHelementXApi, IccPatientXApi } from '../../icc-x-api'
import { crypto } from '../../node-compat'
import { Patient } from '../../icc-api/model/Patient'
import { assert } from 'chai'
import { randomUUID } from 'crypto'
import { getEnvironmentInitializer, getEnvVariables, hcp1Username, setLocalStorage, TestUtils, TestVars } from '../utils/test_utils'
import { HealthElement } from '../../icc-api/model/HealthElement'
import { Code } from '../../icc-api/model/Code'
import { User } from '../../icc-api/model/User'
import initKey = TestUtils.initKey

setLocalStorage(fetch)
let env: TestVars | undefined

async function createPatient(patientApiForHcp: IccPatientXApi, hcpUser: User) {
  return patientApiForHcp.createPatientWithUser(
    hcpUser,
    await patientApiForHcp.newInstance(
      hcpUser,
      new Patient({
        id: randomUUID(),
        firstName: 'John',
        lastName: 'Snow',
        note: 'Winter is coming',
      })
    )
  )
}

function healthElementToCreate(hElementApiForHcp: IccHelementXApi, hcpUser: User, patient: Patient) {
  return hElementApiForHcp.newInstance(
    hcpUser,
    patient,
    new HealthElement({
      id: randomUUID(),
      codes: [new Code({ system: 'LOINC', code: '95209', version: '3' })],
      note: 'SARS-V2',
    }),
    true
  )
}

describe('icc-helement-x-api Tests', () => {
  before(async function () {
    this.timeout(600000)
    const initializer = await getEnvironmentInitializer()
    env = await initializer.execute(getEnvVariables())
  })

  it('CreateHealthElementWithUser Success for HCP', async () => {
    // Given
    const {
      userApi: userApiForHcp,
      dataOwnerApi: dataOwnerApiForHcp,
      patientApi: patientApiForHcp,
      healthcareElementApi: hElementApiForHcp,
      cryptoApi: cryptoApiForHcp,
    } = await Api(env!.iCureUrl, env!.dataOwnerDetails[hcp1Username].user, env!.dataOwnerDetails[hcp1Username].password, crypto)

    const hcpUser = await userApiForHcp.getCurrentUser()
    await initKey(dataOwnerApiForHcp, cryptoApiForHcp, hcpUser, env!.dataOwnerDetails[hcp1Username].privateKey)

    const patient = await createPatient(patientApiForHcp, hcpUser)
    const hElementToCreate = await healthElementToCreate(hElementApiForHcp, hcpUser, patient)

    // When
    const createdHealthElement = await hElementApiForHcp.createHealthElementWithUser(hcpUser, hElementToCreate)

    // Then
    const readHealthElement = await hElementApiForHcp.getHealthElementWithUser(hcpUser, createdHealthElement.id!)
    assert(readHealthElement != null)
    assert(readHealthElement.id != null)
    assert(readHealthElement.note == hElementToCreate.note)
    assert(readHealthElement.delegations![hcpUser.healthcarePartyId!].length > 0)
    assert(readHealthElement.encryptionKeys![hcpUser.healthcarePartyId!].length > 0)
    assert(readHealthElement.cryptedForeignKeys![hcpUser.healthcarePartyId!].length > 0)
  })

  it('ModifyHealthElementWithUser Success for HCP', async () => {
    // Given
    const {
      userApi: userApiForHcp,
      dataOwnerApi: dataOwnerApiForHcp,
      patientApi: patientApiForHcp,
      healthcareElementApi: hElementApiForHcp,
      cryptoApi: cryptoApiForHcp,
    } = await Api(env!.iCureUrl, env!.dataOwnerDetails[hcp1Username].user, env!.dataOwnerDetails[hcp1Username].password, crypto)

    const hcpUser = await userApiForHcp.getCurrentUser()
    await initKey(dataOwnerApiForHcp, cryptoApiForHcp, hcpUser, env!.dataOwnerDetails[hcp1Username].privateKey)

    const patient = await createPatient(patientApiForHcp, hcpUser)
    const createdHealthElement = await hElementApiForHcp.createHealthElementWithUser(
      hcpUser,
      await healthElementToCreate(hElementApiForHcp, hcpUser, patient)
    )

    // When
    const modifiedHealthElement = await hElementApiForHcp.modifyHealthElementWithUser(hcpUser, {
      ...createdHealthElement,
      note: 'SARS-V2 (COVID-19)',
    })

    // Then
    const readHealthElement = await hElementApiForHcp.getHealthElementWithUser(hcpUser, createdHealthElement.id!)
    assert(readHealthElement != null)
    assert(readHealthElement.id != null)
    assert(readHealthElement.note != createdHealthElement.note)
    assert(readHealthElement.note == modifiedHealthElement.note)
    assert(readHealthElement.delegations![hcpUser.healthcarePartyId!].length > 0)
    assert(readHealthElement.encryptionKeys![hcpUser.healthcarePartyId!].length > 0)
    assert(readHealthElement.cryptedForeignKeys![hcpUser.healthcarePartyId!].length > 0)
  })

  it('findHealthElementsByHCPartyAndPatientWithUser Success for HCP', async () => {
    // Given
    const {
      userApi: userApiForHcp,
      dataOwnerApi: dataOwnerApiForHcp,
      patientApi: patientApiForHcp,
      healthcareElementApi: hElementApiForHcp,
      cryptoApi: cryptoApiForHcp,
    } = await Api(env!.iCureUrl, env!.dataOwnerDetails[hcp1Username].user, env!.dataOwnerDetails[hcp1Username].password, crypto)

    const hcpUser = await userApiForHcp.getCurrentUser()
    await initKey(dataOwnerApiForHcp, cryptoApiForHcp, hcpUser, env!.dataOwnerDetails[hcp1Username].privateKey)

    const patient = (await createPatient(patientApiForHcp, hcpUser)) as Patient
    const createdHealthElement = await hElementApiForHcp.createHealthElementWithUser(
      hcpUser,
      await healthElementToCreate(hElementApiForHcp, hcpUser, patient)
    )

    // When
    const foundHealthElements = await hElementApiForHcp.findHealthElementsByHCPartyAndPatientWithUser(hcpUser, hcpUser.healthcarePartyId!, patient)

    // Then
    assert(foundHealthElements.length == 1)
    assert(foundHealthElements[0].id == createdHealthElement.id)
  })
})
