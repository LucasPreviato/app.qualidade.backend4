import { ObjectType, Field, Int, OmitType } from '@nestjs/graphql';
import { ResolveInitialQualificationQuestionsType } from 'src/providers_resources/initial-qualification-questions-types/entities/initial-qualification-questions-type.entity';
import { ResolveProvider } from 'src/providers_resources/providers/entities/provider.entity';

@ObjectType()
export class ProvidersCategory {
  @Field(() => Int)
  id: number;
  @Field()
  name: string;
  @Field(() => Boolean, { nullable: true })
  requiresInitialQualification?: boolean;
  @Field(() => Boolean, { nullable: true })
  requiredPeriodicEvaluation?: boolean;
  @Field(() => Boolean, { nullable: true })
  periodicCheck?: boolean;
  @Field(() => Date, { nullable: true })
  createdAt?: Date;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
  @Field(() => [ResolveProvider], { nullable: true })
  provider?: ResolveProvider[];
  @Field(() => [ResolveInitialQualificationQuestionsType], { nullable: true })
  initialQualificationQuestionsType?: ResolveInitialQualificationQuestionsType[];
}
@ObjectType()
export class ResolveProvidersCategory extends OmitType(ProvidersCategory, [
  'provider',
  'initialQualificationQuestionsType',
] as const) {}
