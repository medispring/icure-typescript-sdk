/**
 * iCure Cloud API Documentation
 * Spring shop sample application
 *
 * OpenAPI spec version: v0.0.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { XHR } from "./XHR"
import { Delegation } from "../model/Delegation"
import { DocIdentifier } from "../model/DocIdentifier"
import { FilterChainHealthElement } from "../model/FilterChainHealthElement"
import { HealthElement } from "../model/HealthElement"
import { IcureStub } from "../model/IcureStub"

export class IccHelementApi {
  host: string
  headers: Array<XHR.Header>
  fetchImpl?: (input: RequestInfo, init?: RequestInit) => Promise<Response>

  constructor(
    host: string,
    headers: any,
    fetchImpl?: (input: RequestInfo, init?: RequestInit) => Promise<Response>
  ) {
    this.host = host
    this.headers = Object.keys(headers).map(k => new XHR.Header(k, headers[k]))
    this.fetchImpl = fetchImpl
  }

  setHeaders(h: Array<XHR.Header>) {
    this.headers = h
  }

  handleError(e: XHR.XHRError): never {
    throw e
  }

  /**
   * Returns an instance of created healthcare element.
   * @summary Create a healthcare element with the current user
   * @param body
   */
  createHealthElement(body?: HealthElement): Promise<HealthElement> {
    let _body = null
    _body = body

    const _url = this.host + `/helement` + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new HealthElement(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   * Response is a set containing the ID's of deleted healthcare elements.
   * @summary Delete healthcare elements.
   * @param healthElementIds
   */
  deleteHealthElements(healthElementIds: string): Promise<Array<DocIdentifier>> {
    let _body = null

    const _url =
      this.host +
      `/helement/${encodeURIComponent(String(healthElementIds))}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("DELETE", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new DocIdentifier(it)))
      .catch(err => this.handleError(err))
  }

  /**
   * Returns a list of healthcare elements along with next start keys and Document ID. If the nextStartKey is Null it means that this is the last page.
   * @summary Filter healthcare elements for the current user (HcParty)
   * @param body
   */
  filterHealthElementsBy(body?: FilterChainHealthElement): Promise<Array<HealthElement>> {
    let _body = null
    _body = body

    const _url = this.host + `/helement/filter` + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new HealthElement(it)))
      .catch(err => this.handleError(err))
  }

  /**
   * Keys hast to delimited by coma
   * @summary List healthcare elements found By Healthcare Party and secret foreign keyelementIds.
   * @param hcPartyId
   * @param secretFKeys
   */
  findHealthElementsByHCPartyPatientForeignKeys(
    hcPartyId: string,
    secretFKeys: string
  ): Promise<Array<HealthElement>> {
    let _body = null

    const _url =
      this.host +
      `/helement/byHcPartySecretForeignKeys` +
      "?ts=" +
      new Date().getTime() +
      (hcPartyId ? "&hcPartyId=" + encodeURIComponent(String(hcPartyId)) : "") +
      (secretFKeys ? "&secretFKeys=" + encodeURIComponent(String(secretFKeys)) : "")
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new HealthElement(it)))
      .catch(err => this.handleError(err))
  }

  /**
   * Keys must be delimited by coma
   * @summary List helement stubs found By Healthcare Party and secret foreign keys.
   * @param hcPartyId
   * @param secretFKeys
   */
  findHealthElementsDelegationsStubsByHCPartyPatientForeignKeys(
    hcPartyId: string,
    secretFKeys: string
  ): Promise<Array<IcureStub>> {
    let _body = null

    const _url =
      this.host +
      `/helement/byHcPartySecretForeignKeys/delegations` +
      "?ts=" +
      new Date().getTime() +
      (hcPartyId ? "&hcPartyId=" + encodeURIComponent(String(hcPartyId)) : "") +
      (secretFKeys ? "&secretFKeys=" + encodeURIComponent(String(secretFKeys)) : "")
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new IcureStub(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Get a healthcare element
   * @param healthElementId
   */
  getHealthElement(healthElementId: string): Promise<HealthElement> {
    let _body = null

    const _url =
      this.host +
      `/helement/${encodeURIComponent(String(healthElementId))}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new HealthElement(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   * Returns the modified healthcare element.
   * @summary Modify a healthcare element
   * @param body
   */
  modifyHealthElement(body?: HealthElement): Promise<HealthElement> {
    let _body = null
    _body = body

    const _url = this.host + `/helement` + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("PUT", _url, headers, _body, this.fetchImpl)
      .then(doc => new HealthElement(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   * Returns the modified healthcare elements.
   * @summary Modify a batch of healthcare elements
   * @param body
   */
  modifyHealthElements(body?: Array<HealthElement>): Promise<Array<HealthElement>> {
    let _body = null
    _body = body

    const _url = this.host + `/helement/batch` + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("PUT", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new HealthElement(it)))
      .catch(err => this.handleError(err))
  }

  /**
   * It delegates a healthcare element to a healthcare party (By current healthcare party). Returns the element with new delegations.
   * @summary Delegates a healthcare element to a healthcare party
   * @param body
   * @param healthElementId
   */
  newHealthElementDelegations(
    healthElementId: string,
    body?: Array<Delegation>
  ): Promise<HealthElement> {
    let _body = null
    _body = body

    const _url =
      this.host +
      `/helement/${encodeURIComponent(String(healthElementId))}/delegate` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new HealthElement(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   * Keys must be delimited by coma
   * @summary Update delegations in healthElements.
   * @param body
   */
  setHealthElementsDelegations(body?: Array<IcureStub>): Promise<Array<HealthElement>> {
    let _body = null
    _body = body

    const _url = this.host + `/helement/delegations` + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new HealthElement(it)))
      .catch(err => this.handleError(err))
  }
}
