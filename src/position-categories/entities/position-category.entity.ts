import { ObjectType, Field, Int, OmitType } from '@nestjs/graphql';
import { ResolvePositions } from 'src/positions/entities/position.entity';

@ObjectType()
export class PositionCategory {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  name: string;
  @Field(() => Date)
  createdAt: Date;
  @Field(() => [ResolvePositions], { nullable: true })
  positions?: ResolvePositions[];
}

@ObjectType()
export class ResolvePositionCategories extends OmitType(PositionCategory, [
  'positions',
] as const) {}
