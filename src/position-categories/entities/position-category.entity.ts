import { ObjectType, Field, Int, OmitType } from '@nestjs/graphql';

@ObjectType()
export class PositionCategory {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  name: string;
  @Field(() => Date)
  createdAt: Date;
  @Field()
  positions: string;
}

@ObjectType()
export class ResolvePositionCategories extends OmitType(PositionCategory, [
  'createdAt',
] as const) {}
