import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUnitInput {
  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  phone?: string;
}
