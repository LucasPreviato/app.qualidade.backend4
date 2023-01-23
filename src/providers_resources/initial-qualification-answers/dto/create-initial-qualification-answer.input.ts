import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInitialQualificationAnswerInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
