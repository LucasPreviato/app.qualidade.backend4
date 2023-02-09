import { CreateInitialQualificationQuestionInput } from './create-initial-qualification-question.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInitialQualificationQuestionInput extends PartialType(
  CreateInitialQualificationQuestionInput
) {
  @Field(() => Int)
  id: number;
}
