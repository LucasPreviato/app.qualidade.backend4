import { ObjectType, Field, Int, OmitType } from '@nestjs/graphql';
import { ResolveDepartments } from 'src/departments/entities/department.entity';
import { ResolveProvidersCategories } from 'src/providers-categories/entities/providers-category.entity';

@ObjectType()
export class Provider {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  name: string;
  @Field(() => String, { nullable: true })
  tradeName?: string;
  @Field(() => String, { nullable: true })
  address?: string;
  @Field(() => String, { nullable: true })
  district?: string;
  @Field(() => String, { nullable: true })
  city?: string;
  @Field(() => String, { nullable: true })
  state?: string;
  @Field(() => String, { nullable: true })
  zipCode?: string;
  @Field(() => String, { nullable: true })
  cnpj?: string;
  @Field(() => String, { nullable: true })
  crm?: string;
  @Field(() => Boolean)
  providerCritical: boolean;
  @Field(() => String, { nullable: true })
  contactName?: string;
  @Field(() => String, { nullable: true })
  email?: string;
  @Field(() => String, { nullable: true })
  phone?: string;
  @Field(() => String, { nullable: true })
  website?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
  @Field(() => ResolveDepartments)
  department: ResolveDepartments;
  @Field(() => ResolveProvidersCategories)
  ProviderCategory: ResolveProvidersCategories;
}

@ObjectType()
export class ResolveProviders extends OmitType(Provider, [
  'department',
  'ProviderCategory',
] as const) {}
