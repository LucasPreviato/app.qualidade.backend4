import { InputType, Field } from '@nestjs/graphql';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateProvidersCategoryInput {
  @Field()
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name must not be empty' })
  @MaxLength(100, { message: 'Name must be at most 100 characters long' })
  @MinLength(3, { message: 'Name must be at least 3 characters long' })
  name: string;
  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean({ message: 'Requires initial qualification must be a boolean' })
  requiresInitialQualification?: boolean;
  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean({ message: 'Requires initial qualification must be a boolean' })
  requiredPeriodicEvaluation?: boolean;
  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean({ message: 'Requires initial qualification must be a boolean' })
  periodicCheck?: boolean;
}
