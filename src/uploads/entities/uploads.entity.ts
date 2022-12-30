import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Uploads {
  @Field(() => String)
  fileName: string
  @Field(() => String)
  fileType: string
  @Field(() => String)
  fileUrl: string
}
