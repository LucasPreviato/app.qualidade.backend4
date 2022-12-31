import { Module } from '@nestjs/common'
import { DocumentsCategoriesService } from './documents-categories.service'
import { DocumentsCategoriesResolver } from './documents-categories.resolver'
import { DocumentsCategoriesRepository } from './repositories/documents-categories-repository'
import { PrismaDocumentsCategoriesRepository } from './repositories/prisma/prisma-documents-categories-repository'

@Module({
  providers: [
    DocumentsCategoriesResolver,
    DocumentsCategoriesService,
    {
      provide: DocumentsCategoriesRepository,
      useClass: PrismaDocumentsCategoriesRepository,
    },
  ],
})
export class DocumentsCategoriesModule {}
