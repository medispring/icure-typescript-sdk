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
import { AddressDto } from "./AddressDto"

export class MedicalLocationDto {
  constructor(json: JSON | any) {
    Object.assign(this as MedicalLocationDto, json)
  }

  id?: string
  rev?: string
  deletionDate?: number
  name?: string
  description?: string
  address?: AddressDto
  cbe?: string
  bic?: string
  bankAccount?: string
  nihii?: string
  ssin?: string
  responsible?: string
  agendaIds?: Array<string>
  guardPost?: boolean
}
