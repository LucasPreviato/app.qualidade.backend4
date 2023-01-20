import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePositionCategoryInput {
  @Field(() => String)
  name: string;
}
