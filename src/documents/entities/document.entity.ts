import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class Document {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
