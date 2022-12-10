import { ObjectType, Field, Int, OmitType } from '@nestjs/graphql';
import { ResolveDepartments } from 'src/departments/entities/department.entity';

@ObjectType()
export class Unit {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => [ResolveDepartments], { nullable: true })
  departments?: ResolveDepartments[];
}

@ObjectType()
export class ResolveUnit extends OmitType(Unit, ['departments'] as const) {}
