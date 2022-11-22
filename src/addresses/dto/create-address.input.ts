import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAddressInput {
  @Field({ nullable: true })
  city?: string;
  @Field({ nullable: true })
  street?: string;
  @Field({ nullable: true })
  number?: string;
  @Field({ nullable: true })
  complement?: string;
  @Field({ nullable: true })
  district?: string;
  @Field({ nullable: true })
  cep?: string;
  @Field({ nullable: true })
  uf?: string;
}
