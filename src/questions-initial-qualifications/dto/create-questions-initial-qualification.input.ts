import { InputType, Field, registerEnumType, Int } from '@nestjs/graphql';
import { TypeOfAnswerQuestion } from '@prisma/client';

registerEnumType(TypeOfAnswerQuestion, {
  name: 'TypeOfAnswerQuestion',
});

@InputType()
export class CreateQuestionsinitialqualificationInput {
  @Field(() => String)
  question: string;
  @Field(() => TypeOfAnswerQuestion, { defaultValue: 'OBJECTIVE' })
  typeOfAnswer: TypeOfAnswerQuestion;
  @Field(() => Int)
  providersCategoryId: number;
}
