import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql'
import { DocumentCodeFormat, DocumentType } from '@prisma/client'

registerEnumType(DocumentType, { name: 'DocumentType' })
registerEnumType(DocumentCodeFormat, { name: 'DocumentCodeFormat' })

@InputType()
export class CreateDocumentsCategoryInput {
  @Field(() => String)
  name: string
  @Field(() => DocumentType, { nullable: true })
  documentType?: DocumentType
  @Field(() => DocumentCodeFormat, { defaultValue: 'SIMPLE' })
  codeFormat: DocumentCodeFormat
}
