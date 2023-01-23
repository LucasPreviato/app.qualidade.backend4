import { CreateInitialQualificationInput } from './create-initial-qualification.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInitialQualificationInput extends PartialType(
  CreateInitialQualificationInput
) {
  @Field(() => Int)
  id: number;
}
