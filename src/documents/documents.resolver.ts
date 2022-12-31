import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { DocumentsService } from './documents.service'
import { Document } from './entities/document.entity'
import { CreateDocumentInput } from './dto/create-document.input'
import { UpdateDocumentInput } from './dto/update-document.input'
import { GraphQLUpload, FileUpload } from 'graphql-upload-minimal'
import { UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'

@Resolver(() => Document)
export class DocumentsResolver {
  constructor(private readonly documentsService: DocumentsService) {}

  @Mutation(() => Document)
  createDocument(
    @Args('createDocumentInput') createDocumentInput: CreateDocumentInput,
    @Args('documentFile', { type: () => GraphQLUpload, nullable: true })
    documentFile: Promise<FileUpload>
  ) {
    return this.documentsService.createGQL(createDocumentInput, documentFile)
  }

  @Query(() => [Document], { name: 'documents' })
  findAll() {
    return this.documentsService.findAll()
  }

  @Query(() => Document, { name: 'document' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.documentsService.findOne(id)
  }

  @Mutation(() => Document)
  updateDocument(
    @Args('updateDocumentInput') updateDocumentInput: UpdateDocumentInput,
    @Args('documentFile', { type: () => GraphQLUpload, nullable: true })
    documentFile: Promise<FileUpload>
  ) {
    return this.documentsService.updateGQL(
      updateDocumentInput.id,
      updateDocumentInput,
      documentFile
    )
  }

  @Mutation(() => Document)
  removeDocument(@Args('id', { type: () => Int }) id: number) {
    return this.documentsService.remove(id)
  }
}
