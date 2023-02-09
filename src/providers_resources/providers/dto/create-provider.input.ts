import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProviderInput {
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
}
