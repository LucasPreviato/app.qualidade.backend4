import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class InitialQualification {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
