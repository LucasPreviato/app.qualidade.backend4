import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInitialQualificationQuestionsTypeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
