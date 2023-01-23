import { CreateProvidersCategoryInput } from './create-providers-category.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProvidersCategoryInput extends PartialType(
  CreateProvidersCategoryInput
) {
  @Field(() => Int)
  id: number;
}
