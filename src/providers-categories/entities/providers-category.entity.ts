import { ObjectType, Field, Int, OmitType } from '@nestjs/graphql';
import { ResolveQuestionsinitialqualifications } from 'src/questions-initial-qualifications/entities/questions-initial-qualification.entity';
import { ResolveQuestionsPeriodicQualifications } from 'src/questions-periodic-qualifications/entities/questions-periodic-qualification.entity';

@ObjectType()
export class ProvidersCategory {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  name: string;
  @Field(() => Boolean, { nullable: true })
  requiredInitialQualification?: boolean;
  @Field(() => Boolean, { nullable: true })
  requiredPeriodicQualification?: boolean;
  @Field(() => Boolean, { nullable: true })
  periodicCheck?: boolean;
  @Field(() => Date)
  createdAt: Date;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
  @Field(() => [ResolveQuestionsinitialqualifications], { nullable: true })
  questionsInitialQualification?: ResolveQuestionsinitialqualifications[];
  @Field(() => [ResolveQuestionsPeriodicQualifications], { nullable: true })
  questionsPeriodicQualification?: ResolveQuestionsPeriodicQualifications[];
}

@ObjectType()
export class ResolveProvidersCategories extends OmitType(ProvidersCategory, [
  'questionsInitialQualification',
  'questionsPeriodicQualification',
] as const) {}
