import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateProviderInput {
  @Field()
  name: string;
  @Field({ nullable: true })
  email?: string;
  @Field({ nullable: true })
  phone?: string;
  @Field(() => Int)
  providersCategoryId: number;
}
