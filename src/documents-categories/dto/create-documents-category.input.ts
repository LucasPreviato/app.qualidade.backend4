import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateDocumentsCategoryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
