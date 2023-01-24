import { ObjectType, Field, Int, OmitType } from '@nestjs/graphql';
import { ResolveInitialQualificationQuestion } from 'src/providers_resources/initial-qualification-questions/entities/initial-qualification-question.entity';
import { ResolveInitialQualification } from 'src/providers_resources/initial-qualifications/entities/initial-qualification.entity';
import { ResolveProvidersCategory } from 'src/providers_resources/providers-categories/entities/providers-category.entity';

@ObjectType()
export class InitialQualificationQuestionsType {
  @Field(() => Int)
  id: number;
  @Field(() => Date)
  createdAt: Date;
  @Field(() => Date)
  updatedAt: Date;
  @Field(() => ResolveProvidersCategory)
  providerCategory: ResolveProvidersCategory;
  @Field(() => ResolveInitialQualification)
  initialQualification: ResolveInitialQualification;
  @Field(() => [ResolveInitialQualificationQuestion])
  initialQualificationQuestions: ResolveInitialQualificationQuestion[];
}

@ObjectType()
export class ResolveInitialQualificationQuestionsType extends OmitType(
  InitialQualificationQuestionsType,
  [
    'providerCategory',
    'initialQualification',
    'initialQualificationQuestions',
  ] as const
) {}
