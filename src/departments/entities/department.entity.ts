import { ObjectType, Field, Int } from '@nestjs/graphql';

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
}
