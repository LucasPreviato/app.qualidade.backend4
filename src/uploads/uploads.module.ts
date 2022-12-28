import { Module } from '@nestjs/common'
import { UploadsService } from './uploads.service'
import { UploadsResolver } from './uploads.resolver'

@Module({
  providers: [UploadsService, UploadsResolver],
})
export class UploadsModule {}
