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
import { DocIdentifier } from "../model/DocIdentifier"
import { FrontEndMigrationDto } from "../model/FrontEndMigrationDto"

export class iccFrontendmigrationApi {
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
   *
   * @summary Creates a front end migration
   * @param body
   */
  createFrontEndMigration(body?: FrontEndMigrationDto): Promise<FrontEndMigrationDto | any> {
    let _body = null
    _body = body

    const _url = this.host + "/frontendmigration" + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new FrontEndMigrationDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Deletes a front end migration
   * @param frontEndMigrationId
   */
  deleteFrontEndMigration(frontEndMigrationId: string): Promise<DocIdentifier | any> {
    let _body = null

    const _url =
      this.host +
      "/frontendmigration/${encodeURIComponent(String(frontEndMigrationId))}".replace(
        "{frontEndMigrationId}",
        frontEndMigrationId + ""
      ) +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("DELETE", _url, headers, _body, this.fetchImpl)
      .then(doc => new DocIdentifier(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Gets a front end migration
   * @param frontEndMigrationId
   */
  getFrontEndMigration(frontEndMigrationId: string): Promise<FrontEndMigrationDto | any> {
    let _body = null

    const _url =
      this.host +
      "/frontendmigration/${encodeURIComponent(String(frontEndMigrationId))}".replace(
        "{frontEndMigrationId}",
        frontEndMigrationId + ""
      ) +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new FrontEndMigrationDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Gets an front end migration
   * @param frontEndMigrationName
   */
  getFrontEndMigrationByName(
    frontEndMigrationName: string
  ): Promise<Array<FrontEndMigrationDto> | any> {
    let _body = null

    const _url =
      this.host +
      "/frontendmigration/byName/${encodeURIComponent(String(frontEndMigrationName))}".replace(
        "{frontEndMigrationName}",
        frontEndMigrationName + ""
      ) +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new FrontEndMigrationDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Gets a front end migration
   */
  getFrontEndMigrations(): Promise<Array<FrontEndMigrationDto> | any> {
    let _body = null

    const _url = this.host + "/frontendmigration" + "?ts=" + new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new FrontEndMigrationDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Modifies a front end migration
   * @param body
   */
  modifyFrontEndMigration(body?: FrontEndMigrationDto): Promise<FrontEndMigrationDto | any> {
    let _body = null
    _body = body

    const _url = this.host + "/frontendmigration" + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("PUT", _url, headers, _body, this.fetchImpl)
      .then(doc => new FrontEndMigrationDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
}
