import { DocumentStatus } from '@prisma/client'
import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql'
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

registerEnumType(DocumentStatus, { name: 'DocumentStatus' })

@InputType()
export class CreateDocumentInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  name: string

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  reference?: string

  @Field(() => Date, { nullable: true })
  @IsDate()
  @IsOptional()
  @IsNotEmpty()
  updatedAt?: Date

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  fileURL?: string

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  pdfURL?: string

  @Field(() => Int)
  @IsNumber()
  @IsNotEmpty()
  elaboratorId: number

  @Field(() => Date, { nullable: true })
  @IsDate()
  @IsOptional()
  @IsNotEmpty()
  elaboratorAt?: Date

  @Field(() => Int, { nullable: true })
  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  revisorId?: number

  @Field(() => Date, { nullable: true })
  @IsDate()
  @IsOptional()
  @IsNotEmpty()
  revisorAt?: Date

  @Field(() => Int, { nullable: true })
  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  approverId?: number

  @Field(() => Date, { nullable: true })
  @IsDate()
  @IsOptional()
  @IsNotEmpty()
  approverAt?: Date

  @Field(() => DocumentStatus, { nullable: true })
  @IsOptional()
  @IsNotEmpty()
  status?: DocumentStatus

  @Field(() => Int)
  @IsNumber()
  @IsNotEmpty()
  unitId: number

  @Field(() => Int)
  @IsNumber()
  @IsNotEmpty()
  departmentId: number

  @Field(() => Int)
  @IsNumber()
  @IsNotEmpty()
  documentCategoryId: number
}
