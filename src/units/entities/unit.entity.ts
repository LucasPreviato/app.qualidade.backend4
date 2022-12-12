import { ObjectType, Field, Int, OmitType } from '@nestjs/graphql';
import { ResolveCollaborators } from 'src/collaborators/entities/collaborator.entity';
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

  @Field(() => [ResolveCollaborators], { nullable: true })
  collaborators?: ResolveCollaborators[];
}

@ObjectType()
export class ResolveUnit extends OmitType(Unit, [
  'departments',
  'collaborators',
] as const) {}
