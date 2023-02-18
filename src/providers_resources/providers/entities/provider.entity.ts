import { ObjectType, Field, Int, OmitType } from '@nestjs/graphql';
import { ResolveProvidersCategory } from 'src/providers_resources/providers-categories/entities/providers-category.entity';

@ObjectType()
export class Provider {
  @Field(() => Int)
  id: number;
  @Field()
  name: string;
  @Field({ nullable: true })
  email?: string;
  @Field({ nullable: true })
  phone?: string;
  @Field({ nullable: true })
  createdAt?: Date;
  @Field({ nullable: true })
  updatedAt?: Date;
  @Field(() => ResolveProvidersCategory, { nullable: true })
  providersCategory?: ResolveProvidersCategory;
}

@ObjectType()
export class ResolveProvider extends OmitType(Provider, [
  'providersCategory',
] as const) {}
