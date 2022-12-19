import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePositionInput {
  @Field(() => String)
  name: string;
  @Field(() => String, { nullable: true })
  requiredQualifications?: string;
  @Field(() => String, { nullable: true })
  desiredQualifications?: string;
  @Field(() => String, { nullable: true })
  requiredEducation?: string;
  @Field(() => String, { nullable: true })
  desiredEducation?: string;
  @Field(() => String, { nullable: true })
  requiredExperience?: string;
  @Field(() => String, { nullable: true })
  desiredExperience?: string;
  @Field(() => Int)
  version: number;
  @Field(() => Date)
  revisionAt: Date;
  @Field(() => String)
  alterations: string;
  @Field(() => Int)
  positionCategoryId: number;
}
