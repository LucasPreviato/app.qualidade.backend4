import { DocumentStatus } from '@prisma/client'
import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql'
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator'

registerEnumType(DocumentStatus, { name: 'DocumentStatus' })

@InputType()
export class CreateDocumentInput {
  @Field(() => String)
  @IsString()
  name: string

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  reference?: string

  @Field(() => Date, { nullable: true })
  @IsDate()
  @IsOptional()
  updatedAt?: Date

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  fileURL?: string

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  pdfURL?: string

  @Field(() => Int)
  @IsNumber()
  elaboratorId: number

  @Field(() => Date, { nullable: true })
  @IsDate()
  @IsOptional()
  elaboratorAt?: Date

  @Field(() => Int, { nullable: true })
  @IsNumber()
  @IsOptional()
  revisorId?: number

  @Field(() => Date, { nullable: true })
  @IsDate()
  @IsOptional()
  revisorAt?: Date

  @Field(() => Int, { nullable: true })
  @IsNumber()
  @IsOptional()
  approverId?: number

  @Field(() => Date, { nullable: true })
  @IsDate()
  @IsOptional()
  approverAt?: Date

  @Field(() => DocumentStatus, { nullable: true })
  @IsOptional()
  status?: DocumentStatus

  @Field(() => Int)
  @IsNumber()
  unitId: number

  @Field(() => Int)
  @IsNumber()
  departmentId: number

  @Field(() => Int)
  @IsNumber()
  documentCategoryId: number
}
