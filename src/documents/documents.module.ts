import { Module } from '@nestjs/common'
import { DocumentsService } from './documents.service'
import { DocumentsResolver } from './documents.resolver'
import { DocumentsRepository } from './repositories/documents-repository'
import { PrismaDocumentsRepository } from './repositories/prisma/prisma-documents-repository'
import { UploadsModule } from 'src/uploads/uploads.module'
import { UploadsService } from 'src/uploads/uploads.service'

@Module({
  providers: [
    DocumentsResolver,
    DocumentsService,
    {
      provide: DocumentsRepository,
      useClass: PrismaDocumentsRepository,
    },
    UploadsService,
  ],

  imports: [UploadsModule],
})
export class DocumentsModule {}
