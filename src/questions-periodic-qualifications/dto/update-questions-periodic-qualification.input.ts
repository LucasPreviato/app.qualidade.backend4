import { CreateQuestionsPeriodicQualificationInput } from './create-questions-periodic-qualification.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateQuestionsPeriodicQualificationInput extends PartialType(
  CreateQuestionsPeriodicQualificationInput
) {
  @Field(() => Int)
  id: number;
}
