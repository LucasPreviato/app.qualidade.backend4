import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUnitInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
