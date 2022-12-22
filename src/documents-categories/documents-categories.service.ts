import { Injectable } from '@nestjs/common'
import { CreateDocumentsCategoryInput } from './dto/create-documents-category.input'
import { UpdateDocumentsCategoryInput } from './dto/update-documents-category.input'

@Injectable()
export class DocumentsCategoriesService {
  create(createDocumentsCategoryInput: CreateDocumentsCategoryInput) {
    return 'This action adds a new documentsCategory'
  }

  findAll() {
    return `This action returns all documentsCategories`
  }

  findOne(id: number) {
    return `This action returns a #${id} documentsCategory`
  }

  update(
    id: number,
    updateDocumentsCategoryInput: UpdateDocumentsCategoryInput
  ) {
    return `This action updates a #${id} documentsCategory`
  }

  remove(id: number) {
    return `This action removes a #${id} documentsCategory`
  }
}
