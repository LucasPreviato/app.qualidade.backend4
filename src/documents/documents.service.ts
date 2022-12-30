import { Injectable } from '@nestjs/common'
import { InputNotFoundException } from 'src/errors/input-not-found-exception'
import { CreateDocumentInput } from './dto/create-document.input'
import { UpdateDocumentInput } from './dto/update-document.input'
import { DocumentsRepository } from './repositories/documents-repository'
import { FileUpload } from 'graphql-upload-minimal'
import { UploadsService } from 'src/uploads/uploads.service'

@Injectable()
export class DocumentsService {
  constructor(
    private documentsRepository: DocumentsRepository,
    private uploadsService: UploadsService
  ) {}

  async create(
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
    }: CreateDocumentInput,

    documentFile: Promise<FileUpload>
  ) {
    try {
      if (documentFile) {
        const upload = this.uploadsService.uploadFile(documentFile)
        fileURL = (await upload).fileUrl
      }
    } catch (e) {
      console.error(e)
    }

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
    }: UpdateDocumentInput,

    documentFile: Promise<FileUpload>
  ) {
    try {
      if (documentFile) {
        const upload = this.uploadsService.uploadFile(documentFile)
        fileURL = (await upload).fileUrl
      }
    } catch (e) {
      console.error(e)
    }

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
