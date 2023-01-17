import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProvidersCategoryInput {
  @Field(() => String)
  name: string;
  @Field(() => Boolean, { nullable: true })
  requiredInitialQualification?: boolean;
  @Field(() => Boolean, { nullable: true })
  requiredPeriodicQualification?: boolean;
  @Field(() => Boolean, { nullable: true })
  periodicCheck?: boolean;
}
