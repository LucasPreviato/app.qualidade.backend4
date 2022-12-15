import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePositionCategoryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
