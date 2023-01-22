import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProviderInput {
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
  @Field(() => Int)
  departmentId: number;
  @Field(() => Int)
  providerCategoryId: number;
}
