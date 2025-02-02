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
import { ByteArray } from '../model/ByteArray'
import { DocIdentifier } from '../model/DocIdentifier'
import { DocumentTemplate } from '../model/DocumentTemplate'
import { AuthenticationProvider, NoAuthenticationProvider } from '../../icc-x-api/auth/AuthenticationProvider'

export class IccDoctemplateApi {
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
   * Returns an instance of created document template.
   * @summary Create a document template with the current user
   * @param body
   */
  createDocumentTemplate(body?: DocumentTemplate): Promise<DocumentTemplate> {
    let _body = null
    _body = body

    const _url = this.host + `/doctemplate` + '?ts=' + new Date().getTime()
    let headers = this.headers
    headers = headers.filter((h) => h.header !== 'Content-Type').concat(new XHR.Header('Content-Type', 'application/json'))
    return XHR.sendCommand('POST', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => new DocumentTemplate(doc.body as JSON))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Deletes a document template
   * @param documentTemplateIds
   */
  deleteDocumentTemplate(documentTemplateIds: string): Promise<Array<DocIdentifier>> {
    let _body = null

    const _url = this.host + `/doctemplate/${encodeURIComponent(String(documentTemplateIds))}` + '?ts=' + new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand('DELETE', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => (doc.body as Array<JSON>).map((it) => new DocIdentifier(it)))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Gets all document templates for all users
   */
  findAllDocumentTemplates(): Promise<Array<DocumentTemplate>> {
    let _body = null

    const _url = this.host + `/doctemplate/find/all` + '?ts=' + new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand('GET', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => (doc.body as Array<JSON>).map((it) => new DocumentTemplate(it)))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Gets all document templates for current user
   */
  findDocumentTemplates(): Promise<Array<DocumentTemplate>> {
    let _body = null

    const _url = this.host + `/doctemplate` + '?ts=' + new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand('GET', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => (doc.body as Array<JSON>).map((it) => new DocumentTemplate(it)))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Gets all document templates by Type
   * @param documentTypeCode
   */
  findDocumentTemplatesByDocumentType(documentTypeCode: string): Promise<Array<DocumentTemplate>> {
    let _body = null

    const _url = this.host + `/doctemplate/byDocumentType/${encodeURIComponent(String(documentTypeCode))}` + '?ts=' + new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand('GET', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => (doc.body as Array<JSON>).map((it) => new DocumentTemplate(it)))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Gets all document templates by Type For currentUser
   * @param documentTypeCode
   */
  findDocumentTemplatesByDocumentTypeForCurrentUser(documentTypeCode: string): Promise<Array<DocumentTemplate>> {
    let _body = null

    const _url =
      this.host + `/doctemplate/byDocumentTypeForCurrentUser/${encodeURIComponent(String(documentTypeCode))}` + '?ts=' + new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand('GET', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => (doc.body as Array<JSON>).map((it) => new DocumentTemplate(it)))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Gets all document templates
   * @param specialityCode
   */
  findDocumentTemplatesBySpeciality(specialityCode: string): Promise<Array<DocumentTemplate>> {
    let _body = null

    const _url = this.host + `/doctemplate/bySpecialty/${encodeURIComponent(String(specialityCode))}` + '?ts=' + new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand('GET', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => (doc.body as Array<JSON>).map((it) => new DocumentTemplate(it)))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Download a the document template attachment
   * @param documentTemplateId
   * @param attachmentId
   */
  getAttachmentText(documentTemplateId: string, attachmentId: string): Promise<ArrayBuffer> {
    let _body = null

    const _url =
      this.host +
      `/doctemplate/${encodeURIComponent(String(documentTemplateId))}/attachmentText/${encodeURIComponent(String(attachmentId))}` +
      '?ts=' +
      new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand('GET', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => doc.body)
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Gets a document template
   * @param documentTemplateId
   */
  getDocumentTemplate(documentTemplateId: string): Promise<DocumentTemplate> {
    let _body = null

    const _url = this.host + `/doctemplate/${encodeURIComponent(String(documentTemplateId))}` + '?ts=' + new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand('GET', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => new DocumentTemplate(doc.body as JSON))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Download a the document template attachment
   * @param documentTemplateId
   * @param attachmentId
   */
  getDocumentTemplateAttachment(documentTemplateId: string, attachmentId: string): Promise<ArrayBuffer> {
    let _body = null

    const _url =
      this.host +
      `/doctemplate/${encodeURIComponent(String(documentTemplateId))}/attachment/${encodeURIComponent(String(attachmentId))}` +
      '?ts=' +
      new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand('GET', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => doc.body)
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Creates a document's attachment
   * @param body
   * @param documentTemplateId
   */
  setDocumentTemplateAttachment(documentTemplateId: string, body?: ArrayBuffer): Promise<DocumentTemplate> {
    let _body = null
    _body = body

    const _url = this.host + `/doctemplate/${encodeURIComponent(String(documentTemplateId))}/attachment` + '?ts=' + new Date().getTime()
    let headers = this.headers
    headers = headers.filter((h) => h.header !== 'Content-Type').concat(new XHR.Header('Content-Type', 'application/octet-stream'))
    return XHR.sendCommand('PUT', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => new DocumentTemplate(doc.body as JSON))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Creates a document's attachment
   * @param body
   * @param documentTemplateId
   */
  setDocumentTemplateAttachmentJson(documentTemplateId: string, body?: string): Promise<DocumentTemplate> {
    let _body = null
    _body = body

    const _url = this.host + `/doctemplate/${encodeURIComponent(String(documentTemplateId))}/attachmentJson` + '?ts=' + new Date().getTime()
    let headers = this.headers
    headers = headers.filter((h) => h.header !== 'Content-Type').concat(new XHR.Header('Content-Type', 'application/octet-stream'))
    return XHR.sendCommand('PUT', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => new DocumentTemplate(doc.body as JSON))
      .catch((err) => this.handleError(err))
  }

  /**
   * Returns an instance of created document template.
   * @summary Modify a document template with the current user
   * @param body
   * @param documentTemplateId
   */
  updateDocumentTemplate(documentTemplateId: string, body?: DocumentTemplate): Promise<DocumentTemplate> {
    let _body = null
    _body = body

    const _url = this.host + `/doctemplate/${encodeURIComponent(String(documentTemplateId))}` + '?ts=' + new Date().getTime()
    let headers = this.headers
    headers = headers.filter((h) => h.header !== 'Content-Type').concat(new XHR.Header('Content-Type', 'application/json'))
    return XHR.sendCommand('PUT', _url, headers, _body, this.fetchImpl, undefined, this.authenticationProvider.getAuthService())
      .then((doc) => new DocumentTemplate(doc.body as JSON))
      .catch((err) => this.handleError(err))
  }
}
