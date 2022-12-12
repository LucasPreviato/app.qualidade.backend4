import { ObjectType, Field, Int, OmitType } from '@nestjs/graphql';
import { ResolveDepartments } from 'src/departments/entities/department.entity';
import { ResolveUnit } from 'src/units/entities/unit.entity';

@ObjectType()
export class Collaborator {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  name: string;
  @Field(() => String)
  email: string;
  @Field(() => String, { nullable: true })
  phone?: string;
  @Field(() => Date)
  createdAt: Date;
  @Field(() => Date)
  hireDate: Date;
  @Field(() => ResolveUnit)
  unit: ResolveUnit;
  @Field(() => ResolveDepartments)
  department: ResolveDepartments;
}

@ObjectType()
export class ResolveCollaborators extends OmitType(Collaborator, [
  'unit',
  'department',
] as const) {}
