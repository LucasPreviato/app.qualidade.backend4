import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateDepartmentInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  name: string;
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  initials?: string;
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  email?: string;
  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  unitId?: number;
}
