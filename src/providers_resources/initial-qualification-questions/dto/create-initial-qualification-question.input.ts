import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInitialQualificationQuestionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
