import { ObjectType, Field, Int, OmitType } from '@nestjs/graphql';
import { ResolveDepartments } from 'src/departments/entities/department.entity';
import { ResolveInitialQualification } from 'src/providers_resources/initial-qualifications/entities/initial-qualification.entity';
import { ResolveProvidersCategory } from 'src/providers_resources/providers-categories/entities/providers-category.entity';

@ObjectType()
export class Provider {
  @Field(() => Int)
  id: number;
  @Field()
  name: string;
  @Field()
  tradeName: string;
  @Field({ nullable: true })
  address?: string;
  @Field({ nullable: true })
  district?: string;
  @Field({ nullable: true })
  city?: string;
  @Field({ nullable: true })
  state?: string;
  @Field({ nullable: true })
  zipCode?: string;
  @Field({ nullable: true })
  cnpj?: string;
  @Field({ nullable: true })
  crm?: string;
  @Field(() => Boolean)
  providerCritical: boolean;
  @Field({ nullable: true })
  contactName?: string;
  @Field({ nullable: true })
  email?: string;
  @Field({ nullable: true })
  phone?: string;
  @Field({ nullable: true })
  website?: string;
  @Field({ nullable: true })
  createdAt?: Date;
  @Field({ nullable: true })
  updatedAt?: Date;
  @Field(() => ResolveDepartments)
  department: ResolveDepartments;
  @Field(() => ResolveProvidersCategory)
  providersCategory: ResolveProvidersCategory;
  @Field(() => [ResolveInitialQualification])
  initialQualification: ResolveInitialQualification[];
}

@ObjectType()
export class ResolveProvider extends OmitType(Provider, [
  'department',
  'providersCategory',
  'initialQualification',
] as const) {}
