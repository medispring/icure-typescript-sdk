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
import { Address } from './Address'
import { HealthcareParty } from './HealthcareParty'
import { Service } from './Service'

export class IncapacityExportInfo {
  constructor(json: JSON | any) {
    Object.assign(this as IncapacityExportInfo, json)
  }

  recipient?: HealthcareParty
  comment?: string
  incapacityId?: string
  notificationDate?: number
  retraction?: boolean
  dataset?: string
  transactionType?: string
  incapacityreason?: string
  beginmoment?: number
  endmoment?: number
  outofhomeallowed?: boolean
  incapWork?: boolean
  incapSchool?: boolean
  incapSwim?: boolean
  incapSchoolsports?: boolean
  incapHeavyphysicalactivity?: boolean
  diagnoseServices?: Array<Service>
  jobstatus?: string
  job?: string
  occupationalDiseaseDeclDate?: number
  accidentDate?: number
  expectedbirthgivingDate?: number
  maternityleaveBegin?: number
  maternityleaveEnd?: number
  hospitalisationBegin?: number
  hospitalisationEnd?: number
  hospital?: HealthcareParty
  contactPersonTel?: string
  recoveryAddress?: Address
  foreignStayBegin?: number
  foreignStayEnd?: number
}