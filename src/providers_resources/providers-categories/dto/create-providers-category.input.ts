import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProvidersCategoryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
