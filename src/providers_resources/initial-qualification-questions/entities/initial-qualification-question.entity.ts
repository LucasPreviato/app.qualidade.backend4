import { ObjectType, Field, Int, OmitType } from '@nestjs/graphql';
import { ResolveInitialQualificationAnswer } from 'src/providers_resources/initial-qualification-answers/entities/initial-qualification-answer.entity';
import { ResolveInitialQualificationQuestionsType } from 'src/providers_resources/initial-qualification-questions-types/entities/initial-qualification-questions-type.entity';
import { ResolveInitialQualification } from 'src/providers_resources/initial-qualifications/entities/initial-qualification.entity';

@ObjectType()
export class InitialQualificationQuestion {
  @Field(() => Int)
  id: number;
  @Field()
  question: string;
  @Field()
  createdAt: Date;
  @Field()
  updatedAt: Date;
  @Field(() => ResolveInitialQualificationQuestionsType)
  initialQualificationQuestionsType: ResolveInitialQualificationQuestionsType;
  @Field(() => ResolveInitialQualification)
  initialQualification: ResolveInitialQualification;
  @Field(() => [ResolveInitialQualificationAnswer])
  initialQualificationAnswer: ResolveInitialQualificationAnswer[];
}
@ObjectType()
export class ResolveInitialQualificationQuestion extends OmitType(
  InitialQualificationQuestion,
  [
    'initialQualificationQuestionsType',
    'initialQualification',
    'initialQualificationAnswer',
  ] as const
) {}
