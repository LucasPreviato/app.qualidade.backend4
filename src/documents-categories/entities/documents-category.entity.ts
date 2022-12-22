import {
  Field,
  Int,
  registerEnumType,
  ObjectType,
  OmitType,
} from '@nestjs/graphql'
import { ResolveDocuments } from 'src/documents/entities/document.entity'
import { CodeFormat } from '../enums/documents-categories.code-format.enums'

registerEnumType(DocumentType, {
  name: 'DocumentType',
})
registerEnumType(CodeFormat, {
  name: 'CodeFormat',
})

@ObjectType()
export class DocumentsCategory {
  @Field(() => Int)
  id: number
  @Field(() => String)
  name: string
  @Field(() => Date)
  createdAt: Date
  @Field(() => DocumentType)
  documentType: DocumentType
  @Field(() => CodeFormat, { defaultValue: 'SIMPLE' })
  codeFormat: CodeFormat
  @Field(() => [ResolveDocuments], { nullable: true })
  documents?: ResolveDocuments[]
}

@ObjectType()
export class ResolveDocumentsCategory extends OmitType(DocumentsCategory, [
  'documents',
] as const) {}
