import {
  ObjectType,
  Field,
  Int,
  registerEnumType,
  OmitType,
} from '@nestjs/graphql'
import { Status } from 'src/documents/enums/documents.enums'
import { ResolveCollaborators } from 'src/collaborators/entities/collaborator.entity'
import { ResolveUnit } from 'src/units/entities/unit.entity'
import { ResolveDepartments } from 'src/departments/entities/department.entity'
import { ResolveDocumentsCategory } from 'src/documents-categories/entities/documents-category.entity'

registerEnumType(Status, { name: 'Status' })

@ObjectType()
export class Document {
  @Field(() => Int)
  id: number

  @Field(() => String)
  name: string

  @Field(() => String, { nullable: true })
  reference: string

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date, { nullable: true })
  updatedAt: Date

  @Field(() => String, { nullable: true })
  fileURL: string

  @Field(() => String, { nullable: true })
  pdfURL: string

  @Field(() => ResolveCollaborators)
  elaborator: ResolveCollaborators

  @Field(() => Date, { nullable: true })
  elaboratorAt: Date

  @Field(() => ResolveCollaborators)
  revisor: ResolveCollaborators

  @Field(() => Date, { nullable: true })
  revisorAt: Date

  @Field(() => ResolveCollaborators)
  approver: ResolveCollaborators

  @Field(() => Date, { nullable: true })
  approverAt: Date

  @Field(() => Status, { defaultValue: 'ELABORATION' })
  status: Status

  @Field(() => ResolveUnit)
  unit: ResolveUnit

  @Field(() => ResolveDepartments)
  department: ResolveDepartments

  @Field(() => ResolveDocumentsCategory)
  documentCategory: ResolveDocumentsCategory
}

@ObjectType()
export class ResolveDocuments extends OmitType(Document, [
  'elaborator',
  'revisor',
  'approver',
  'unit',
  'department',
  'documentCategory',
] as const) {}
