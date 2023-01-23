import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Provider {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
