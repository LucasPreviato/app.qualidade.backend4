import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class DocumentsCategory {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
