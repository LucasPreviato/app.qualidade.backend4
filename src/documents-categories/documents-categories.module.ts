import { Module } from '@nestjs/common'
import { DocumentsCategoriesService } from './documents-categories.service'
import { DocumentsCategoriesResolver } from './documents-categories.resolver'

@Module({
  providers: [DocumentsCategoriesResolver, DocumentsCategoriesService],
})
export class DocumentsCategoriesModule {}
