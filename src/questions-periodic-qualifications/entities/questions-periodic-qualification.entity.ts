import {
  ObjectType,
  Field,
  Int,
  OmitType,
  registerEnumType,
} from '@nestjs/graphql';
import { TypeOfAnswerQuestion } from '@prisma/client';
import { ResolveProvidersCategories } from 'src/providers-categories/entities/providers-category.entity';

registerEnumType(TypeOfAnswerQuestion, {
  name: 'TypeOfAnswerQuestion',
});

@ObjectType()
export class QuestionsPeriodicQualification {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  question: string;
  @Field(() => TypeOfAnswerQuestion)
  typeOfAnswer: TypeOfAnswerQuestion;

  @Field(() => Date)
  createdAt: Date;
  @Field(() => Date)
  updatedAt: Date;

  @Field(() => ResolveProvidersCategories)
  providerCategory: ResolveProvidersCategories;
}

@ObjectType()
export class ResolveQuestionsPeriodicQualifications extends OmitType(
  QuestionsPeriodicQualification,
  ['providerCategory'] as const
) {}
