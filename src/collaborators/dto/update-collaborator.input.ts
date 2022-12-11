import { CreateCollaboratorInput } from './create-collaborator.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCollaboratorInput extends PartialType(CreateCollaboratorInput) {
  @Field(() => Int)
  id: number;
}
