import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Department } from 'src/departments/entities/department.entity';

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

  @Field(() => [Department])
  departments: Department[];
}
