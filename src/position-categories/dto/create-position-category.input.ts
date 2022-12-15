import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePositionCategoryInput {
  @Field(() => String)
  name: string;
}
