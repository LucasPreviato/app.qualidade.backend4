import { Injectable } from '@nestjs/common'
import { InputNotFoundException } from 'src/errors/input-not-found-exception'
import { CreateDocumentsCategoryInput } from './dto/create-documents-category.input'
import { UpdateDocumentsCategoryInput } from './dto/update-documents-category.input'
import { DocumentsCategoriesRepository } from './repositories/documents-categories-repository'

@Injectable()
export class DocumentsCategoriesService {
  constructor(
    private documentsCategoriesRepository: DocumentsCategoriesRepository
  ) {}
  async create(createDocumentsCategoryInput: CreateDocumentsCategoryInput) {
    const newDocumentsCategory =
      await this.documentsCategoriesRepository.create(
        createDocumentsCategoryInput
      )
    return newDocumentsCategory
  }
  async findAll() {
    return await this.documentsCategoriesRepository.findAll()
  }

  async findOne(id: number) {
    const documentCategory = await this.documentsCategoriesRepository.findOne(
      id
    )
    if (!documentCategory) {
      throw new InputNotFoundException(id)
    }
    return documentCategory
  }

  async update(
    id: number,
    updateDocumentsCategoryInput: UpdateDocumentsCategoryInput
  ) {
    const updatedDocumentCategory =
      await this.documentsCategoriesRepository.update(
        id,
        updateDocumentsCategoryInput
      )
    if (!updatedDocumentCategory) {
      throw new InputNotFoundException(id)
    }
    return updatedDocumentCategory
  }

  async remove(id: number) {
    const deletedDocumentCategory =
      await this.documentsCategoriesRepository.remove(id)
    if (!deletedDocumentCategory) {
      throw new InputNotFoundException(id)
    }
    return deletedDocumentCategory
  }
}
