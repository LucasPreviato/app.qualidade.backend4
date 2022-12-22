import { CreateDocumentsCategoryInput } from './create-documents-category.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateDocumentsCategoryInput extends PartialType(
  CreateDocumentsCategoryInput
) {
  @Field(() => Int)
  id: number
}
