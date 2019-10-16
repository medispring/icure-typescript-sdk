/**
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { XHR } from "./XHR"
import * as models from "../model/models"

export class iccHcpartyApi {
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

  createHealthcareParty(
    body?: models.HealthcarePartyDto
  ): Promise<models.HealthcarePartyDto | any> {
    let _body = null
    _body = body

    const _url = this.host + "/hcparty" + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.HealthcarePartyDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  createHealthcarePartySignUp(body?: models.SignUpDto): Promise<models.HealthcarePartyDto | any> {
    let _body = null
    _body = body

    const _url = this.host + "/hcparty/signup" + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.HealthcarePartyDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  createTemplateReplication(
    replicationHost: string,
    language: string,
    specialtyCode: string,
    protocol?: string,
    port?: string
  ): Promise<models.ReplicationDto | any> {
    let _body = null

    const _url =
      this.host +
      "/hcparty/replication/template/{replicationHost}/{language}/{specialtyCode}"
        .replace("{replicationHost}", replicationHost + "")
        .replace("{language}", language + "")
        .replace("{specialtyCode}", specialtyCode + "") +
      "?ts=" +
      new Date().getTime() +
      (protocol ? "&protocol=" + protocol : "") +
      (port ? "&port=" + port : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.ReplicationDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  deleteHealthcareParties(healthcarePartyIds: string): Promise<Array<string> | any> {
    let _body = null

    const _url =
      this.host +
      "/hcparty/{healthcarePartyIds}".replace("{healthcarePartyIds}", healthcarePartyIds + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("DELETE", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => JSON.parse(JSON.stringify(it))))
      .catch(err => this.handleError(err))
  }
  findByName(
    name?: string,
    startKey?: string,
    startDocumentId?: string,
    limit?: number,
    desc?: boolean
  ): Promise<models.HcPartyPaginatedList | any> {
    let _body = null

    const _url =
      this.host +
      "/hcparty/byName" +
      "?ts=" +
      new Date().getTime() +
      (name ? "&name=" + name : "") +
      (startKey ? "&startKey=" + startKey : "") +
      (startDocumentId ? "&startDocumentId=" + startDocumentId : "") +
      (limit ? "&limit=" + limit : "") +
      (desc ? "&desc=" + desc : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.HcPartyPaginatedList(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  findBySpecialityAndPostCode(
    type?: string,
    spec?: string,
    firstCode?: string,
    lastCode?: string,
    limit?: number
  ): Promise<models.HcPartyPaginatedList | any> {
    let _body = null

    const _url =
      this.host +
      "/hcparty/bySpecialityAndPostCode/{type}/{spec}/{firstCode}/to/{lastCode}" +
      "?ts=" +
      new Date().getTime() +
      (type ? "&type=" + type : "") +
      (spec ? "&spec=" + spec : "") +
      (firstCode ? "&firstCode=" + firstCode : "") +
      (lastCode ? "&lastCode=" + lastCode : "") +
      (limit ? "&limit=" + limit : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.HcPartyPaginatedList(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  findBySsinOrNihii(
    searchValue: string,
    startKey?: string,
    startDocumentId?: string,
    limit?: number,
    desc?: boolean
  ): Promise<models.HcPartyPaginatedList | any> {
    let _body = null

    const _url =
      this.host +
      "/hcparty/byNihiiOrSsin/{searchValue}".replace("{searchValue}", searchValue + "") +
      "?ts=" +
      new Date().getTime() +
      (startKey ? "&startKey=" + startKey : "") +
      (startDocumentId ? "&startDocumentId=" + startDocumentId : "") +
      (limit ? "&limit=" + limit : "") +
      (desc ? "&desc=" + desc : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.HcPartyPaginatedList(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getCurrentHealthcareParty(): Promise<models.HealthcarePartyDto | any> {
    let _body = null

    const _url = this.host + "/hcparty/current" + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.HealthcarePartyDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getHcPartyKeysForDelegate(healthcarePartyId: string): Promise<{ [key: string]: string } | any> {
    let _body = null

    const _url =
      this.host +
      "/hcparty/{healthcarePartyId}/keys".replace("{healthcarePartyId}", healthcarePartyId + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => JSON.parse(JSON.stringify(doc.body)))
      .catch(err => this.handleError(err))
  }
  getHealthcareParties(
    healthcarePartyIds: string
  ): Promise<Array<models.HealthcarePartyDto> | any> {
    let _body = null

    const _url =
      this.host +
      "/hcparty/byIds/{healthcarePartyIds}".replace(
        "{healthcarePartyIds}",
        healthcarePartyIds + ""
      ) +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new models.HealthcarePartyDto(it)))
      .catch(err => this.handleError(err))
  }
  getHealthcarePartiesByParentId(
    parentId: string
  ): Promise<Array<models.HealthcarePartyDto> | any> {
    let _body = null

    const _url =
      this.host +
      "/hcparty/{parentId}/children".replace("{parentId}", parentId + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new models.HealthcarePartyDto(it)))
      .catch(err => this.handleError(err))
  }
  getHealthcareParty(healthcarePartyId: string): Promise<models.HealthcarePartyDto | any> {
    let _body = null

    const _url =
      this.host +
      "/hcparty/{healthcarePartyId}".replace("{healthcarePartyId}", healthcarePartyId + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.HealthcarePartyDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getPublicKey(healthcarePartyId: string): Promise<models.PublicKeyDto | any> {
    let _body = null

    const _url =
      this.host +
      "/hcparty/{healthcarePartyId}/publicKey".replace(
        "{healthcarePartyId}",
        healthcarePartyId + ""
      ) +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.PublicKeyDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  listByName(name: string): Promise<Array<models.HealthcarePartyDto> | any> {
    let _body = null

    const _url =
      this.host +
      "/hcparty/byNameStrict/{name}".replace("{name}", name + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new models.HealthcarePartyDto(it)))
      .catch(err => this.handleError(err))
  }
  listHealthcareParties(
    startKey?: string,
    startDocumentId?: string,
    limit?: number,
    desc?: boolean
  ): Promise<models.HcPartyPaginatedList | any> {
    let _body = null

    const _url =
      this.host +
      "/hcparty" +
      "?ts=" +
      new Date().getTime() +
      (startKey ? "&startKey=" + startKey : "") +
      (startDocumentId ? "&startDocumentId=" + startDocumentId : "") +
      (limit ? "&limit=" + limit : "") +
      (desc ? "&desc=" + desc : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.HcPartyPaginatedList(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  modifyHealthcareParty(
    body?: models.HealthcarePartyDto
  ): Promise<models.HealthcarePartyDto | any> {
    let _body = null
    _body = body

    const _url = this.host + "/hcparty" + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("PUT", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.HealthcarePartyDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
}
