import { ObjectType, Field, Int, OmitType } from '@nestjs/graphql';
import { ResolvePositionCategories } from 'src/position-categories/entities/position-category.entity';

@ObjectType()
export class Position {
  @Field(() => Int)
  id: number;
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
  @Field(() => Date)
  createdAt: Date;
  @Field(() => ResolvePositionCategories)
  positionCategory: ResolvePositionCategories;
}

@ObjectType()
export class ResolvePositions extends OmitType(Position, [
  'positionCategory',
] as const) {}
