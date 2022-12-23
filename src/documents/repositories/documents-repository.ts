import { CreateDocumentInput } from '../dto/create-document.input'
import { UpdateDocumentInput } from '../dto/update-document.input'
import { Document } from '../entities/document.entity'

export abstract class DocumentsRepository {
  abstract create({
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
  }: CreateDocumentInput): Promise<Document>

  abstract findAll(): Promise<Document[]>

  abstract findOne(id: number): Promise<Document | null>

  abstract update(
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
  ): Promise<Document>

  abstract remove(id: number): Promise<Document>
}
