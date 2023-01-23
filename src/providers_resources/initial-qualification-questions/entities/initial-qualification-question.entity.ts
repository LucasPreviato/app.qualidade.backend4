import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class InitialQualificationQuestion {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
