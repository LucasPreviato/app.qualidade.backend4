import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDepartmentInput {
  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  initials?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => Int, { nullable: true })
  unitId?: number;
}
