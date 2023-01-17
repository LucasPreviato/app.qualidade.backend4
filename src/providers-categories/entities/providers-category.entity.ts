import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ProvidersCategory {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  name: string;
  @Field(() => Boolean, { nullable: true })
  requiredInitialQualification?: boolean;
  @Field(() => Boolean, { nullable: true })
  requiredPeriodicQualification?: boolean;
  @Field(() => Boolean, { nullable: true })
  periodicCheck?: boolean;
  @Field(() => Date)
  createdAt: Date;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}
