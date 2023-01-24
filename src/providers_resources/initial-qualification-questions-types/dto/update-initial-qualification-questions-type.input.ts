import { CreateInitialQualificationQuestionsTypeInput } from './create-initial-qualification-questions-type.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInitialQualificationQuestionsTypeInput extends PartialType(
  CreateInitialQualificationQuestionsTypeInput
) {
  @Field(() => Int)
  id: number;
}
