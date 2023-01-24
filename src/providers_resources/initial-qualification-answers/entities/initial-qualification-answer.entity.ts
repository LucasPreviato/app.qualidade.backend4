import {
  ObjectType,
  Field,
  Int,
  OmitType,
  registerEnumType,
} from '@nestjs/graphql';
import { InitialQualificationAnswerType } from '@prisma/client';
import { ResolveInitialQualificationQuestion } from 'src/providers_resources/initial-qualification-questions/entities/initial-qualification-question.entity';

registerEnumType(InitialQualificationAnswerType, {
  name: 'InitialQualificationAnswerType',
});

@ObjectType()
export class InitialQualificationAnswer {
  @Field(() => Int)
  id: number;
  @Field(() => InitialQualificationAnswerType)
  answer: InitialQualificationAnswerType;
  @Field()
  createdAt: Date;
  @Field()
  updatedAt: Date;
  @Field(() => ResolveInitialQualificationQuestion)
  initialQualificationQuestion: ResolveInitialQualificationQuestion;
}
@ObjectType()
export class ResolveInitialQualificationAnswer extends OmitType(
  InitialQualificationAnswer,
  ['initialQualificationQuestion'] as const
) {}
