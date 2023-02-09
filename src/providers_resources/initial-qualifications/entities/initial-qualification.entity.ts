import {
  ObjectType,
  Field,
  Int,
  OmitType,
  registerEnumType,
} from '@nestjs/graphql';
import { QualificationStatus } from '@prisma/client';
import { ResolveInitialQualificationQuestionsType } from 'src/providers_resources/initial-qualification-questions-types/entities/initial-qualification-questions-type.entity';
import { ResolveInitialQualificationQuestion } from 'src/providers_resources/initial-qualification-questions/entities/initial-qualification-question.entity';
import { ResolveProvider } from 'src/providers_resources/providers/entities/provider.entity';

registerEnumType(QualificationStatus, {
  name: 'QualificationStatus',
});

@ObjectType()
export class InitialQualification {
  @Field(() => Int)
  id: number;
  @Field(() => QualificationStatus)
  qualificationStatus: QualificationStatus;
  @Field(() => Date)
  createdAt: Date;
  @Field(() => Date)
  updatedAt: Date;
  @Field(() => ResolveProvider)
  provider: ResolveProvider;
  @Field(() => [ResolveInitialQualificationQuestionsType])
  initialQualificationQuestionsType: ResolveInitialQualificationQuestionsType[];
  @Field(() => [ResolveInitialQualificationQuestion])
  initialQualificationQuestions: ResolveInitialQualificationQuestion[];
}

@ObjectType()
export class ResolveInitialQualification extends OmitType(
  InitialQualification,
  [
    'provider',
    'initialQualificationQuestionsType',
    'initialQualificationQuestions',
  ] as const
) {}
