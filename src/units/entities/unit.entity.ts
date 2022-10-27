import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Unit {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
