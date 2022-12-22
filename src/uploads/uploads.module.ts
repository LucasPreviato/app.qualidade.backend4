import { Module } from '@nestjs/common'
import { UploadsResolver } from './uploads.resolver'

@Module({
  controllers: [],
  providers: [UploadsResolver],
})
export class UploadsModule {}
