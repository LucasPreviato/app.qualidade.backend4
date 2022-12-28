import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Uploads {
  fileName: string
  fileType: string
  fileUrl: string
}
