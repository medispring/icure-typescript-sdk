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
import { ListOfIdsDto } from "../model/ListOfIdsDto"
import { PaginatedListTarificationDto } from "../model/PaginatedListTarificationDto"
import { TarificationDto } from "../model/TarificationDto"

export class iccTarificationApi {
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

  handleError(e: XHR.XHRError) {
    throw e
  }

  /**
   * Type, Tarification and Version are required.
   * @summary Create a Tarification
   * @param body
   */
  createTarification(body?: TarificationDto): Promise<TarificationDto | any> {
    let _body = null
    _body = body

    const _url = this.host + `/tarification` + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new TarificationDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   * Returns a list of tarifications matched with given input.
   * @summary Finding tarifications by tarification, type and version with pagination.
   * @param region
   * @param type
   * @param tarification
   * @param version
   * @param startDocumentId A tarification document ID
   * @param limit Number of rows
   */
  findPaginatedTarifications(
    region?: string,
    type?: string,
    tarification?: string,
    version?: string,
    startDocumentId?: string,
    limit?: number
  ): Promise<PaginatedListTarificationDto | any> {
    let _body = null

    const _url =
      this.host +
      `/tarification` +
      "?ts=" +
      new Date().getTime() +
      (region ? "&region=" + encodeURIComponent(String(region)) : "") +
      (type ? "&type=" + encodeURIComponent(String(type)) : "") +
      (tarification ? "&tarification=" + encodeURIComponent(String(tarification)) : "") +
      (version ? "&version=" + encodeURIComponent(String(version)) : "") +
      (startDocumentId ? "&startDocumentId=" + encodeURIComponent(String(startDocumentId)) : "") +
      (limit ? "&limit=" + encodeURIComponent(String(limit)) : "")
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new PaginatedListTarificationDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   * Returns a list of tarifications matched with given input.
   * @summary Finding tarifications by tarification, type and version with pagination.
   * @param region
   * @param types
   * @param language
   * @param label
   * @param startDocumentId A tarification document ID
   * @param limit Number of rows
   */
  findPaginatedTarificationsByLabel(
    region?: string,
    types?: string,
    language?: string,
    label?: string,
    startDocumentId?: string,
    limit?: number
  ): Promise<PaginatedListTarificationDto | any> {
    let _body = null

    const _url =
      this.host +
      `/tarification/byLabel` +
      "?ts=" +
      new Date().getTime() +
      (region ? "&region=" + encodeURIComponent(String(region)) : "") +
      (types ? "&types=" + encodeURIComponent(String(types)) : "") +
      (language ? "&language=" + encodeURIComponent(String(language)) : "") +
      (label ? "&label=" + encodeURIComponent(String(label)) : "") +
      (startDocumentId ? "&startDocumentId=" + encodeURIComponent(String(startDocumentId)) : "") +
      (limit ? "&limit=" + encodeURIComponent(String(limit)) : "")
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new PaginatedListTarificationDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   * Returns a list of tarifications matched with given input.
   * @summary Finding tarifications by tarification, type and version
   * @param region Tarification region
   * @param type Tarification type
   * @param tarification Tarification tarification
   * @param version Tarification version
   */
  findTarifications(
    region?: string,
    type?: string,
    tarification?: string,
    version?: string
  ): Promise<Array<TarificationDto> | any> {
    let _body = null

    const _url =
      this.host +
      `/tarification/byRegionTypeTarification` +
      "?ts=" +
      new Date().getTime() +
      (region ? "&region=" + encodeURIComponent(String(region)) : "") +
      (type ? "&type=" + encodeURIComponent(String(type)) : "") +
      (tarification ? "&tarification=" + encodeURIComponent(String(tarification)) : "") +
      (version ? "&version=" + encodeURIComponent(String(version)) : "")
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new TarificationDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   * Get a tarification based on ID or (tarification,type,version) as query strings. (tarification,type,version) is unique.
   * @summary Get a tarification
   * @param tarificationId Tarification id
   */
  getTarification(tarificationId: string): Promise<TarificationDto | any> {
    let _body = null

    const _url =
      this.host +
      `/tarification/${encodeURIComponent(String(tarificationId))}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new TarificationDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   * Get a tarification based on ID or (tarification,type,version) as query strings. (tarification,type,version) is unique.
   * @summary Get a tarification
   * @param type Tarification type
   * @param tarification Tarification tarification
   * @param version Tarification version
   */
  getTarificationWithParts(
    type: string,
    tarification: string,
    version: string
  ): Promise<TarificationDto | any> {
    let _body = null

    const _url =
      this.host +
      `/tarification/${encodeURIComponent(String(type))}/${encodeURIComponent(
        String(tarification)
      )}/${encodeURIComponent(String(version))}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new TarificationDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   * Keys must be delimited by coma
   * @summary Get a list of tarifications by ids
   * @param body
   */
  getTarifications(body?: ListOfIdsDto): Promise<Array<TarificationDto> | any> {
    let _body = null
    _body = body

    const _url = this.host + `/tarification/byIds` + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new TarificationDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   * Modification of (type, tarification, version) is not allowed.
   * @summary Modify a tarification
   * @param body
   */
  modifyTarification(body?: TarificationDto): Promise<TarificationDto | any> {
    let _body = null
    _body = body

    const _url = this.host + `/tarification` + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("PUT", _url, headers, _body, this.fetchImpl)
      .then(doc => new TarificationDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
}
