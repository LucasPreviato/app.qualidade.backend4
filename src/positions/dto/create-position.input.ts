import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePositionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
