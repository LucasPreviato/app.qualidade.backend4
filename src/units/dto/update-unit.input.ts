import { CreateUnitInput } from './create-unit.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUnitInput extends PartialType(CreateUnitInput) {
  @Field(() => Int)
  id: number;
}
