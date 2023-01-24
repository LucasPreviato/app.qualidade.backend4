import { ObjectType, Field, Int, OmitType } from '@nestjs/graphql';
import { ResolveInitialQualificationQuestionsType } from 'src/providers_resources/initial-qualification-questions-types/entities/initial-qualification-questions-type.entity';
import { ResolveProvider } from 'src/providers_resources/providers/entities/provider.entity';

@ObjectType()
export class ProvidersCategory {
  @Field(() => Int)
  id: number;
  @Field()
  name: string;
  @Field()
  requiresInitialQualification: boolean;
  @Field()
  requiredPeriodicQualification: boolean;
  @Field()
  periodicCheck: boolean;
  @Field()
  createdAt: Date;
  @Field()
  updatedAt: Date;
  @Field(() => [ResolveProvider])
  provider: ResolveProvider[];
  @Field(() => [ResolveInitialQualificationQuestionsType])
  initialQualificationQuestionsType: ResolveInitialQualificationQuestionsType[];
}
@ObjectType()
export class ResolveProvidersCategory extends OmitType(ProvidersCategory, [
  'provider',
  'initialQualificationQuestionsType',
] as const) {}
