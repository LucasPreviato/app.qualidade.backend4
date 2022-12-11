import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCollaboratorInput {
  @Field(() => String)
  name: string;
  @Field(() => String)
  email: string;
  @Field(() => String, { nullable: true })
  phone?: string;
  @Field(() => Int)
  departmentId: number;
  @Field(() => Int)
  unitId: number;
}
