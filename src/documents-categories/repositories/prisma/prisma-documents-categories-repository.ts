import { Injectable } from '@nestjs/common';
import { CreateDocumentsCategoryInput } from 'src/documents-categories/dto/create-documents-category.input';
import { UpdateDocumentsCategoryInput } from 'src/documents-categories/dto/update-documents-category.input';
import { DocumentsCategory } from 'src/documents-categories/entities/documents-category.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { DocumentsCategoriesRepository } from '../documents-categories-repository';

@Injectable()
export class PrismaDocumentsCategoriesRepository
  implements DocumentsCategoriesRepository
{
  constructor(private prisma: PrismaService) {}
  async create({
    name,
    documentType,
    codeFormat,
  }: CreateDocumentsCategoryInput): Promise<DocumentsCategory> {
    const newDocumentCategory = await this.prisma.documentCategory.create({
      data: {
        name,
        documentType,
        codeFormat,
      },
    });
    return newDocumentCategory;
  }
  async findAll(): Promise<DocumentsCategory[]> {
    const documentsCategories = await this.prisma.documentCategory.findMany();
    return documentsCategories;
  }
  async findOne(id: number): Promise<DocumentsCategory> {
    const documentCategory = await this.prisma.documentCategory.findUnique({
      where: { id },
    });
    return documentCategory;
  }
  async update(
    id: number,
    { name, documentType, codeFormat }: UpdateDocumentsCategoryInput
  ): Promise<DocumentsCategory> {
    const updatedDocumentCategory = await this.prisma.documentCategory.update({
      where: { id },
      data: {
        name,
        documentType,
        codeFormat,
      },
    });
    return updatedDocumentCategory;
  }
  async remove(id: number): Promise<DocumentsCategory> {
    const deletedDocumentCategory = await this.prisma.documentCategory.delete({
      where: { id },
    });
    return deletedDocumentCategory;
  }
}
