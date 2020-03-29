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
import { CodeDto } from "./CodeDto"
import { DurationDto } from "./DurationDto"
import { MedicinalproductDto } from "./MedicinalproductDto"
import { ParagraphAgreementDto } from "./ParagraphAgreementDto"
import { RegimenItemDto } from "./RegimenItemDto"
import { RenewalDto } from "./RenewalDto"
import { SubstanceproductDto } from "./SubstanceproductDto"
import { SuspensionDto } from "./SuspensionDto"

export class MedicationDto {
  constructor(json: JSON | any) {
    Object.assign(this as MedicationDto, json)
  }

  compoundPrescription?: string
  substanceProduct?: SubstanceproductDto
  medicinalProduct?: MedicinalproductDto
  numberOfPackages?: number
  batch?: string
  instructionForPatient?: string
  commentForDelivery?: string
  drugRoute?: string
  temporality?: string
  duration?: DurationDto
  renewal?: RenewalDto
  beginMoment?: number
  endMoment?: number
  deliveryMoment?: number
  endExecutionMoment?: number
  knownUsage?: boolean
  frequency?: CodeDto
  reimbursementReason?: CodeDto
  substitutionAllowed?: boolean
  regimen?: Array<RegimenItemDto>
  posology?: string
  agreements?: { [key: string]: ParagraphAgreementDto }
  suspension?: Array<SuspensionDto>
  medicationSchemeIdOnSafe?: string
  medicationSchemeSafeVersion?: number
  medicationSchemeTimeStampOnSafe?: number
  medicationSchemeDocumentId?: string
  safeIdName?: string
  idOnSafes?: string
  timestampOnSafe?: number
  changeValidated?: boolean
  newSafeMedication?: boolean
  medicationUse?: string
  beginCondition?: string
  endCondition?: string
  origin?: string
  medicationChanged?: boolean
  posologyChanged?: boolean
  prescriptionRID?: string
  status?: number
}
