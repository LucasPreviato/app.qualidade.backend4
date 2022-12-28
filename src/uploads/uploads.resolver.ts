import { UploadedFile, UseInterceptors } from '@nestjs/common'
import { Mutation, Resolver } from '@nestjs/graphql'
import { FileInterceptor } from '@nestjs/platform-express'
import { Uploads } from './entities/uploads.entity'
import { UploadsService } from './uploads.service'

@Resolver(() => Uploads)
export class UploadsResolver {
  constructor(private readonly uploadsService: UploadsService) {}

  @Mutation(() => Uploads)
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: any): Promise<any> {
    return this.uploadsService.uploadFile(file)
  }
}
