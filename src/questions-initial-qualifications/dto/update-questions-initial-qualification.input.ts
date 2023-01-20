import { CreateQuestionsinitialqualificationInput } from './create-questions-initial-qualification.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateQuestionsinitialqualificationInput extends PartialType(
  CreateQuestionsinitialqualificationInput
) {
  @Field(() => Int)
  id: number;
}
