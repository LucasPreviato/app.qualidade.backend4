import { ObjectType, Field, Int, OmitType } from '@nestjs/graphql';
import { ResolveUnit } from 'src/units/entities/unit.entity';

@ObjectType()
export class Department {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  initials?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => ResolveUnit, { nullable: true })
  unit?: ResolveUnit;
}

@ObjectType()
export class ResolveDepartments extends OmitType(Department, [
  'unit',
] as const) {}
