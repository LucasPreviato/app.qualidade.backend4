import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { DocumentsService } from './documents.service'
import { Document } from './entities/document.entity'

@Resolver(() => Document)
export class DocumentsResolver {
  constructor(private readonly documentsService: DocumentsService) {}

  @Query(() => [Document], { name: 'documents' })
  findAll() {
    return this.documentsService.findAll()
  }

  @Query(() => Document, { name: 'document' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.documentsService.findOne(id)
  }

  @Mutation(() => Document)
  removeDocument(@Args('id', { type: () => Int }) id: number) {
    return this.documentsService.remove(id)
  }
}
