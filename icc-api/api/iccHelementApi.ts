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
import { DelegationDto } from "../model/DelegationDto"
import { DocIdentifier } from "../model/DocIdentifier"
import { FilterChain } from "../model/FilterChain"
import { HealthElementDto } from "../model/HealthElementDto"
import { IcureStubDto } from "../model/IcureStubDto"

export class iccHelementApi {
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

  handleError(e: XHR.Data) {
    if (e.status == 401) throw Error("auth-failed")
    else throw Error("api-error" + e.status)
  }

  /**
   * Returns an instance of created health element.
   * @summary Create a health element with the current user
   * @param body
   */
  createHealthElement(body?: HealthElementDto): Promise<HealthElementDto | any> {
    let _body = null
    _body = body

    const _url = this.host + `/helement` + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new HealthElementDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   * Response is a set containing the ID's of deleted health elements.
   * @summary Delete health elements.
   * @param healthElementIds
   */
  deleteHealthElements(healthElementIds: string): Promise<Array<DocIdentifier> | any> {
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
   * Returns a list of health elements along with next start keys and Document ID. If the nextStartKey is Null it means that this is the last page.
   * @summary Filter health elements for the current user (HcParty)
   * @param body
   */
  filterHealthElementsBy(body?: FilterChain): Promise<Array<HealthElementDto> | any> {
    let _body = null
    _body = body

    const _url = this.host + `/helement/filter` + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new HealthElementDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   * Keys hast to delimited by coma
   * @summary List health elements found By Healthcare Party and secret foreign keyelementIds.
   * @param hcPartyId
   * @param secretFKeys
   */
  findHealthElementsByHCPartyPatientForeignKeys(
    hcPartyId: string,
    secretFKeys: string
  ): Promise<Array<HealthElementDto> | any> {
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
      .then(doc => (doc.body as Array<JSON>).map(it => new HealthElementDto(it)))
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
  ): Promise<Array<IcureStubDto> | any> {
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
      .then(doc => (doc.body as Array<JSON>).map(it => new IcureStubDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Get a health element
   * @param healthElementId
   */
  getHealthElement(healthElementId: string): Promise<HealthElementDto | any> {
    let _body = null

    const _url =
      this.host +
      `/helement/${encodeURIComponent(String(healthElementId))}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new HealthElementDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   * Returns the modified health element.
   * @summary Modify a health element
   * @param body
   */
  modifyHealthElement(body?: HealthElementDto): Promise<HealthElementDto | any> {
    let _body = null
    _body = body

    const _url = this.host + `/helement` + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("PUT", _url, headers, _body, this.fetchImpl)
      .then(doc => new HealthElementDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   * Returns the modified health elements.
   * @summary Modify a batch of health elements
   * @param body
   */
  modifyHealthElements(body?: Array<HealthElementDto>): Promise<Array<HealthElementDto> | any> {
    let _body = null
    _body = body

    const _url = this.host + `/helement/batch` + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("PUT", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new HealthElementDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   * It delegates a health element to a healthcare party (By current healthcare party). Returns the element with new delegations.
   * @summary Delegates a health element to a healthcare party
   * @param body
   * @param healthElementId
   */
  newHealthElementDelegations(
    healthElementId: string,
    body?: Array<DelegationDto>
  ): Promise<HealthElementDto | any> {
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
      .then(doc => new HealthElementDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   * Keys must be delimited by coma
   * @summary Update delegations in healthElements.
   * @param body
   */
  setHealthElementsDelegations(body?: Array<IcureStubDto>): Promise<Array<IcureStubDto> | any> {
    let _body = null
    _body = body

    const _url = this.host + `/helement/delegations` + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new IcureStubDto(it)))
      .catch(err => this.handleError(err))
  }
}
