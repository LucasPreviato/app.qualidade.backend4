import { UploadedFile, UseInterceptors } from '@nestjs/common'
import { Mutation, Resolver } from '@nestjs/graphql'
import { FileInterceptor } from '@nestjs/platform-express'
import { FileUpload } from 'graphql-upload-minimal'
import { Uploads } from './entities/uploads.entity'
import { UploadsService } from './uploads.service'

@Resolver(() => Uploads)
export class UploadsResolver {
  constructor(private readonly uploadsService: UploadsService) {}

  @Mutation(() => Uploads)
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Promise<FileUpload>
  ): Promise<Uploads> {
    return this.uploadsService.uploadFile(null, 'documents')
  }
}
