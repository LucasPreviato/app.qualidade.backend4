import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PositionCategory {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
