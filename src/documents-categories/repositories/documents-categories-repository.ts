import { CreateDocumentsCategoryInput } from '../dto/create-documents-category.input'
import { UpdateDocumentsCategoryInput } from '../dto/update-documents-category.input'
import { DocumentsCategory } from '../entities/documents-category.entity'

export abstract class DocumentsCategoriesRepository {
  abstract create({
    name,
    documentType,
    codeFormat,
  }: CreateDocumentsCategoryInput): Promise<DocumentsCategory>

  abstract findAll(): Promise<DocumentsCategory[]>

  abstract findOne(id: number): Promise<DocumentsCategory | null>

  abstract update(
    id: number,
    { name, documentType, codeFormat }: UpdateDocumentsCategoryInput
  ): Promise<DocumentsCategory>

  abstract remove(id: number): Promise<DocumentsCategory>
}
