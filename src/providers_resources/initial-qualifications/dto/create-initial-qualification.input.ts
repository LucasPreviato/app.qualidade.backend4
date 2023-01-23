import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInitialQualificationInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
