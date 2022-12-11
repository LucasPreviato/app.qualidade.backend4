import { ObjectType, Field, Int } from '@nestjs/graphql';

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
}
