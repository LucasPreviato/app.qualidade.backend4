import { ObjectType, Field, Int, OmitType } from '@nestjs/graphql';
import { ResolveProvider } from 'src/providers_resources/providers/entities/provider.entity';

@ObjectType()
export class ProvidersCategory {
  @Field(() => Int)
  id: number;
  @Field()
  name: string;
  @Field(() => Boolean, { nullable: true })
  needsInitialQualification?: boolean;
  @Field(() => Date, { nullable: true })
  createdAt?: Date;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
  @Field(() => [ResolveProvider], { nullable: true })
  provider?: ResolveProvider[];
}
@ObjectType()
export class ResolveProvidersCategory extends OmitType(ProvidersCategory, [
  'provider',
] as const) {}
