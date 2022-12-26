import { Injectable } from '@nestjs/common'
import { InputNotFoundException } from 'src/errors/input-not-found-exception'
import { CreateDocumentInput } from './dto/create-document.input'
import { UpdateDocumentInput } from './dto/update-document.input'
import { DocumentsRepository } from './repositories/documents-repository'

@Injectable()
export class DocumentsService {
  constructor(private documentsRepository: DocumentsRepository) {}

  async create({
    name,
    reference,
    updatedAt,
    fileURL,
    pdfURL,
    elaboratorId,
    elaboratorAt,
    revisorId,
    revisorAt,
    approverId,
    approverAt,
    status,
    unitId,
    departmentId,
    documentCategoryId,
  }: CreateDocumentInput) {
    return await this.documentsRepository.create({
      name,
      reference,
      updatedAt,
      fileURL,
      pdfURL,
      elaboratorId,
      elaboratorAt,
      revisorId,
      revisorAt,
      approverId,
      approverAt,
      status,
      unitId,
      departmentId,
      documentCategoryId,
    })
  }

  async findAll() {
    return await this.documentsRepository.findAll()
  }

  async findOne(id: number) {
    const document = await this.documentsRepository.findOne(id)
    if (!document) {
      throw new InputNotFoundException(id)
    }
    return document
  }

  async update(
    id: number,
    {
      name,
      reference,
      updatedAt,
      fileURL,
      pdfURL,
      elaboratorId,
      elaboratorAt,
      revisorId,
      revisorAt,
      approverId,
      approverAt,
      status,
      unitId,
      departmentId,
      documentCategoryId,
    }: UpdateDocumentInput
  ) {
    const updateDocument = await this.documentsRepository.update(id, {
      id,
      name,
      reference,
      updatedAt,
      fileURL,
      pdfURL,
      elaboratorId,
      elaboratorAt,
      revisorId,
      revisorAt,
      approverId,
      approverAt,
      status,
      unitId,
      departmentId,
      documentCategoryId,
    })

    return updateDocument
  }

  async remove(id: number) {
    const existingDocument = await this.documentsRepository.remove(id)
    if (!existingDocument) {
      throw new InputNotFoundException(id)
    }

    return await this.documentsRepository.remove(id)
  }
}
