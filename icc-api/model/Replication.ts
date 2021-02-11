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
import { DatabaseSynchronization } from "./DatabaseSynchronization"

import { decodeBase64 } from "./ModelHelper"

export class Replication {
  constructor(json: JSON | any) {
    Object.assign(this as Replication, json)
  }

  id?: string
  rev?: string
  /**
   * hard delete (unix epoch in ms) timestamp of the object. Filled automatically when deletePatient is called.
   */
  deletionDate?: number
  name?: string
  context?: string
  databaseSynchronizations?: Array<DatabaseSynchronization>
}
