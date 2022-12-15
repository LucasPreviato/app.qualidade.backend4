import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Position {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
