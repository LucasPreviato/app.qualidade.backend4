import { CreateInitialQualificationAnswerInput } from './create-initial-qualification-answer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInitialQualificationAnswerInput extends PartialType(
  CreateInitialQualificationAnswerInput
) {
  @Field(() => Int)
  id: number;
}
