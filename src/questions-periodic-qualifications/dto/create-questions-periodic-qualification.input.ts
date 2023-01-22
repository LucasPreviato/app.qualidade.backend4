import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import { TypeOfAnswerQuestion } from '@prisma/client';

registerEnumType(TypeOfAnswerQuestion, {
  name: 'TypeOfAnswerQuestion',
});
@InputType()
export class CreateQuestionsPeriodicQualificationInput {
  @Field(() => String)
  question: string;
  @Field(() => TypeOfAnswerQuestion, { defaultValue: 'OBJECTIVE' })
  typeOfAnswer: TypeOfAnswerQuestion;
  @Field(() => Int)
  providersCategoryId: number;
}
