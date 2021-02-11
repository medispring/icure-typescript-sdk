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
import { Address } from "./Address"

import { decodeBase64 } from "./ModelHelper"

export class MedicalLocation {
  constructor(json: JSON | any) {
    Object.assign(this as MedicalLocation, json)
  }

  id?: string
  rev?: string
  /**
   * hard delete (unix epoch in ms) timestamp of the object. Filled automatically when deletePatient is called.
   */
  deletionDate?: number
  name?: string
  description?: string
  responsible?: string
  guardPost?: boolean
  cbe?: string
  bic?: string
  bankAccount?: string
  nihii?: string
  ssin?: string
  address?: Address
  agendaIds?: Array<string>
  options?: { [key: string]: string }
}
