/**
 * iCure Data Stack API Documentation
 * The iCure Data Stack Application API is the native interface to iCure. This version is obsolete, please use v2.
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { XHR } from './XHR'
import { Delegation } from '../model/Delegation'
import { DocIdentifier } from '../model/DocIdentifier'
import { Form } from '../model/Form'
import { FormTemplate } from '../model/FormTemplate'
import { IcureStub } from '../model/IcureStub'
import { ListOfIds } from '../model/ListOfIds'
import { AuthenticationProvider, NoAuthenticationProvider } from '../../icc-x-api/auth/AuthenticationProvider'

export class IccFormApi {
  host: string
  headers: Array<XHR.Header>
  authenticationProvider: AuthenticationProvider
  fetchImpl?: (input: RequestInfo, init?: RequestInit) => Promise<Response>

  constructor(
    host: string,
    headers: any,
    authenticationProvider?: AuthenticationProvider,
    fetchImpl?: (input: RequestInfo, init?: RequestInit) => Promise<Response>
  ) {
    this.host = host
    this.headers = Object.keys(headers).map((k) => new XHR.Header(k, headers[k]))
    this.authenticationProvider = !!authenticationProvider ? authenticationProvider : new NoAuthenticationProvider()
    this.fetchImpl = fetchImpl
  }

  setHeaders(h: Array<XHR.Header>) {
    this.headers = h
  }

  handleError(e: XHR.XHRError): never {
    throw e
  }

  /**
   * Returns an instance of created form.
   * @summary Create a form with the current user
   * @param body
   */
  createForm(body?: Form): Promise<Form> {
    let _body = null
    _body = body

    const _url = this.host + `/form` + '?ts=' + new Date().getTime()
    let headers = this.headers
    headers = headers.filter((h) => h.header !== 'Content-Type').concat(new XHR.Header('Content-Type', 'application/json'))
    return XHR.sendCommand('POST', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => new Form(doc.body as JSON))
      .catch((err) => this.handleError(err))
  }

  /**
   * Returns an instance of created form template.
   * @summary Create a form template with the current user
   * @param body
   */
  createFormTemplate(body?: FormTemplate): Promise<FormTemplate> {
    let _body = null
    _body = body

    const _url = this.host + `/form/template` + '?ts=' + new Date().getTime()
    let headers = this.headers
    headers = headers.filter((h) => h.header !== 'Content-Type').concat(new XHR.Header('Content-Type', 'application/json'))
    return XHR.sendCommand('POST', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => new FormTemplate(doc.body as JSON))
      .catch((err) => this.handleError(err))
  }

  /**
   * Returns the created forms.
   * @summary Create a batch of forms
   * @param body
   */
  createForms(body?: Array<Form>): Promise<Array<Form>> {
    let _body = null
    _body = body

    const _url = this.host + `/form/batch` + '?ts=' + new Date().getTime()
    let headers = this.headers
    headers = headers.filter((h) => h.header !== 'Content-Type').concat(new XHR.Header('Content-Type', 'application/json'))
    return XHR.sendCommand('POST', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => (doc.body as Array<JSON>).map((it) => new Form(it)))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Delete a form template
   * @param formTemplateId
   */
  deleteFormTemplate(formTemplateId: string): Promise<DocIdentifier> {
    let _body = null

    const _url = this.host + `/form/template/${encodeURIComponent(String(formTemplateId))}` + '?ts=' + new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand('DELETE', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => new DocIdentifier(doc.body as JSON))
      .catch((err) => this.handleError(err))
  }

  /**
   * Response is a set containing the ID's of deleted forms.
   * @summary Delete forms.
   * @param formIds
   */
  deleteForms(formIds: string): Promise<Array<DocIdentifier>> {
    let _body = null

    const _url = this.host + `/form/${encodeURIComponent(String(formIds))}` + '?ts=' + new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand('DELETE', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => (doc.body as Array<JSON>).map((it) => new DocIdentifier(it)))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Gets all form templates for current user
   * @param loadLayout
   */
  findFormTemplates(loadLayout?: boolean): Promise<Array<FormTemplate>> {
    let _body = null

    const _url =
      this.host + `/form/template` + '?ts=' + new Date().getTime() + (loadLayout ? '&loadLayout=' + encodeURIComponent(String(loadLayout)) : '')
    let headers = this.headers
    return XHR.sendCommand('GET', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => (doc.body as Array<JSON>).map((it) => new FormTemplate(it)))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Gets all form templates
   * @param specialityCode
   * @param loadLayout
   */
  findFormTemplatesBySpeciality(specialityCode: string, loadLayout?: boolean): Promise<Array<FormTemplate>> {
    let _body = null

    const _url =
      this.host +
      `/form/template/bySpecialty/${encodeURIComponent(String(specialityCode))}` +
      '?ts=' +
      new Date().getTime() +
      (loadLayout ? '&loadLayout=' + encodeURIComponent(String(loadLayout)) : '')
    let headers = this.headers
    return XHR.sendCommand('GET', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => (doc.body as Array<JSON>).map((it) => new FormTemplate(it)))
      .catch((err) => this.handleError(err))
  }

  /**
   * Keys must be delimited by coma
   * @summary List forms found By Healthcare Party and secret foreign keys.
   * @param hcPartyId
   * @param secretFKeys
   * @param healthElementId
   * @param planOfActionId
   * @param formTemplateId
   */
  findFormsByHCPartyPatientForeignKeys(
    hcPartyId: string,
    secretFKeys: string,
    healthElementId?: string,
    planOfActionId?: string,
    formTemplateId?: string
  ): Promise<Array<Form>> {
    let _body = null

    const _url =
      this.host +
      `/form/byHcPartySecretForeignKeys` +
      '?ts=' +
      new Date().getTime() +
      (hcPartyId ? '&hcPartyId=' + encodeURIComponent(String(hcPartyId)) : '') +
      (secretFKeys ? '&secretFKeys=' + encodeURIComponent(String(secretFKeys)) : '') +
      (healthElementId ? '&healthElementId=' + encodeURIComponent(String(healthElementId)) : '') +
      (planOfActionId ? '&planOfActionId=' + encodeURIComponent(String(planOfActionId)) : '') +
      (formTemplateId ? '&formTemplateId=' + encodeURIComponent(String(formTemplateId)) : '')
    let headers = this.headers
    return XHR.sendCommand('GET', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => (doc.body as Array<JSON>).map((it) => new Form(it)))
      .catch((err) => this.handleError(err))
  }

  /**
   * Keys must be delimited by coma
   * @summary List form stubs found By Healthcare Party and secret foreign keys.
   * @param hcPartyId
   * @param secretFKeys
   */
  findFormsDelegationsStubsByHCPartyPatientForeignKeys(hcPartyId: string, secretFKeys: string): Promise<Array<IcureStub>> {
    let _body = null

    const _url =
      this.host +
      `/form/byHcPartySecretForeignKeys/delegations` +
      '?ts=' +
      new Date().getTime() +
      (hcPartyId ? '&hcPartyId=' + encodeURIComponent(String(hcPartyId)) : '') +
      (secretFKeys ? '&secretFKeys=' + encodeURIComponent(String(secretFKeys)) : '')
    let headers = this.headers
    return XHR.sendCommand('GET', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => (doc.body as Array<JSON>).map((it) => new IcureStub(it)))
      .catch((err) => this.handleError(err))
  }

  /**
   * Keys must be delimited by coma
   * @summary Get a list of forms by ids
   * @param formId
   * @param hcPartyId
   */
  getChildrenForms(formId: string, hcPartyId: string): Promise<Array<Form>> {
    let _body = null

    const _url =
      this.host + `/form/childrenOf/${encodeURIComponent(String(formId))}/${encodeURIComponent(String(hcPartyId))}` + '?ts=' + new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand('GET', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => (doc.body as Array<JSON>).map((it) => new Form(it)))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Gets a form
   * @param formId
   */
  getForm(formId: string): Promise<Form> {
    let _body = null

    const _url = this.host + `/form/${encodeURIComponent(String(formId))}` + '?ts=' + new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand('GET', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => new Form(doc.body as JSON))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Gets the most recent form with the given logicalUuid
   * @param logicalUuid
   */
  getFormByLogicalUuid(logicalUuid: string): Promise<Form> {
    let _body = null

    const _url = this.host + `/form/logicalUuid/${encodeURIComponent(String(logicalUuid))}` + '?ts=' + new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand('GET', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => new Form(doc.body as JSON))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Gets the most recent form with the given uniqueId
   * @param uniqueId
   */
  getFormByUniqueId(uniqueId: string): Promise<Form> {
    let _body = null

    const _url = this.host + `/form/uniqueId/${encodeURIComponent(String(uniqueId))}` + '?ts=' + new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand('GET', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => new Form(doc.body as JSON))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Gets a form template by guid
   * @param formTemplateId
   */
  getFormTemplate(formTemplateId: string): Promise<FormTemplate> {
    let _body = null

    const _url = this.host + `/form/template/${encodeURIComponent(String(formTemplateId))}` + '?ts=' + new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand('GET', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => new FormTemplate(doc.body as JSON))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Gets a form template
   * @param formTemplateGuid
   * @param specialityCode
   */
  getFormTemplatesByGuid(formTemplateGuid: string, specialityCode: string): Promise<Array<FormTemplate>> {
    let _body = null

    const _url =
      this.host +
      `/form/template/${encodeURIComponent(String(specialityCode))}/guid/${encodeURIComponent(String(formTemplateGuid))}` +
      '?ts=' +
      new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand('GET', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => (doc.body as Array<JSON>).map((it) => new FormTemplate(it)))
      .catch((err) => this.handleError(err))
  }

  /**
   * Keys must be delimited by coma
   * @summary Get a list of forms by ids
   * @param body
   */
  getForms(body?: ListOfIds): Promise<Array<Form>> {
    let _body = null
    _body = body

    const _url = this.host + `/form/byIds` + '?ts=' + new Date().getTime()
    let headers = this.headers
    headers = headers.filter((h) => h.header !== 'Content-Type').concat(new XHR.Header('Content-Type', 'application/json'))
    return XHR.sendCommand('POST', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => (doc.body as Array<JSON>).map((it) => new Form(it)))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Gets all forms with given logicalUuid
   * @param logicalUuid
   */
  getFormsByLogicalUuid(logicalUuid: string): Promise<Array<Form>> {
    let _body = null

    const _url = this.host + `/form/all/logicalUuid/${encodeURIComponent(String(logicalUuid))}` + '?ts=' + new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand('GET', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => (doc.body as Array<JSON>).map((it) => new Form(it)))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Gets all forms by uniqueId
   * @param uniqueId
   */
  getFormsByUniqueId(uniqueId: string): Promise<Array<Form>> {
    let _body = null

    const _url = this.host + `/form/all/uniqueId/${encodeURIComponent(String(uniqueId))}` + '?ts=' + new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand('GET', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => (doc.body as Array<JSON>).map((it) => new Form(it)))
      .catch((err) => this.handleError(err))
  }

  /**
   * Returns the modified form.
   * @summary Modify a form
   * @param body
   */
  modifyForm(body?: Form): Promise<Form> {
    let _body = null
    _body = body

    const _url = this.host + `/form` + '?ts=' + new Date().getTime()
    let headers = this.headers
    headers = headers.filter((h) => h.header !== 'Content-Type').concat(new XHR.Header('Content-Type', 'application/json'))
    return XHR.sendCommand('PUT', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => new Form(doc.body as JSON))
      .catch((err) => this.handleError(err))
  }

  /**
   * Returns the modified forms.
   * @summary Modify a batch of forms
   * @param body
   */
  modifyForms(body?: Array<Form>): Promise<Array<Form>> {
    let _body = null
    _body = body

    const _url = this.host + `/form/batch` + '?ts=' + new Date().getTime()
    let headers = this.headers
    headers = headers.filter((h) => h.header !== 'Content-Type').concat(new XHR.Header('Content-Type', 'application/json'))
    return XHR.sendCommand('PUT', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => (doc.body as Array<JSON>).map((it) => new Form(it)))
      .catch((err) => this.handleError(err))
  }

  /**
   * It delegates a form to a healthcare party. Returns the form with the new delegations.
   * @summary Delegates a form to a healthcare party
   * @param body
   * @param formId
   */
  newFormDelegations(formId: string, body?: Array<Delegation>): Promise<Form> {
    let _body = null
    _body = body

    const _url = this.host + `/form/delegate/${encodeURIComponent(String(formId))}` + '?ts=' + new Date().getTime()
    let headers = this.headers
    headers = headers.filter((h) => h.header !== 'Content-Type').concat(new XHR.Header('Content-Type', 'application/json'))
    return XHR.sendCommand('POST', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => new Form(doc.body as JSON))
      .catch((err) => this.handleError(err))
  }

  /**
   * Keys must be delimited by coma
   * @summary Update delegations in form.
   * @param body
   */
  setFormsDelegations(body?: Array<IcureStub>): Promise<Array<IcureStub>> {
    let _body = null
    _body = body

    const _url = this.host + `/form/delegations` + '?ts=' + new Date().getTime()
    let headers = this.headers
    headers = headers.filter((h) => h.header !== 'Content-Type').concat(new XHR.Header('Content-Type', 'application/json'))
    return XHR.sendCommand('POST', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => (doc.body as Array<JSON>).map((it) => new IcureStub(it)))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Update a form template's layout
   * @param attachment
   * @param formTemplateId
   */
  setTemplateAttachmentMulti(attachment: ArrayBuffer, formTemplateId: string): Promise<string> {
    let _body = null
    if (attachment && !_body) {
      const parts = Array.isArray(attachment) ? (attachment as any[]) : [attachment as ArrayBuffer]
      const _blob = new Blob(parts, { type: 'application/octet-stream' })
      _body = new FormData()
      _body.append('attachment', _blob)
    }

    const _url = this.host + `/form/template/${encodeURIComponent(String(formTemplateId))}/attachment/multipart` + '?ts=' + new Date().getTime()
    let headers = this.headers
    headers = headers.filter((h) => h.header !== 'Content-Type').concat(new XHR.Header('Content-Type', 'multipart/form-data'))
    return XHR.sendCommand('PUT', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => JSON.parse(JSON.stringify(doc.body)))
      .catch((err) => this.handleError(err))
  }

  /**
   * Returns an instance of created form template.
   * @summary Modify a form template with the current user
   * @param body
   * @param formTemplateId
   */
  updateFormTemplate(formTemplateId: string, body?: FormTemplate): Promise<FormTemplate> {
    let _body = null
    _body = body

    const _url = this.host + `/form/template/${encodeURIComponent(String(formTemplateId))}` + '?ts=' + new Date().getTime()
    let headers = this.headers
    headers = headers.filter((h) => h.header !== 'Content-Type').concat(new XHR.Header('Content-Type', 'application/json'))
    return XHR.sendCommand('PUT', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => new FormTemplate(doc.body as JSON))
      .catch((err) => this.handleError(err))
  }
}
