import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUnitInput {
  @Field()
  name: string;
  @Field({ nullable: true })
  email?: string;
  @Field({ nullable: true })
  phone?: string;
}
