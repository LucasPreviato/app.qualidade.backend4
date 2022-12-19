import { CreatePositionCategoryInput } from './create-position-category.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePositionCategoryInput extends PartialType(CreatePositionCategoryInput) {
  @Field(() => Int)
  id: number;
}
