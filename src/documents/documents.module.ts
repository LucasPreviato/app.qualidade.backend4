import { Module } from '@nestjs/common'
import { DocumentsService } from './documents.service'
import { DocumentsResolver } from './documents.resolver'

@Module({
  providers: [DocumentsResolver, DocumentsService],
})
export class DocumentsModule {}
