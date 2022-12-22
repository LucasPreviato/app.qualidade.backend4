import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { DocumentsCategoriesService } from './documents-categories.service'
import { DocumentsCategory } from './entities/documents-category.entity'
import { CreateDocumentsCategoryInput } from './dto/create-documents-category.input'
import { UpdateDocumentsCategoryInput } from './dto/update-documents-category.input'

@Resolver(() => DocumentsCategory)
export class DocumentsCategoriesResolver {
  constructor(
    private readonly documentsCategoriesService: DocumentsCategoriesService
  ) {}

  @Mutation(() => DocumentsCategory)
  createDocumentsCategory(
    @Args('createDocumentsCategoryInput')
    createDocumentsCategoryInput: CreateDocumentsCategoryInput
  ) {
    return this.documentsCategoriesService.create(createDocumentsCategoryInput)
  }

  @Query(() => [DocumentsCategory], { name: 'documentsCategories' })
  findAll() {
    return this.documentsCategoriesService.findAll()
  }

  @Query(() => DocumentsCategory, { name: 'documentsCategory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.documentsCategoriesService.findOne(id)
  }

  @Mutation(() => DocumentsCategory)
  updateDocumentsCategory(
    @Args('updateDocumentsCategoryInput')
    updateDocumentsCategoryInput: UpdateDocumentsCategoryInput
  ) {
    return this.documentsCategoriesService.update(
      updateDocumentsCategoryInput.id,
      updateDocumentsCategoryInput
    )
  }

  @Mutation(() => DocumentsCategory)
  removeDocumentsCategory(@Args('id', { type: () => Int }) id: number) {
    return this.documentsCategoriesService.remove(id)
  }
}
