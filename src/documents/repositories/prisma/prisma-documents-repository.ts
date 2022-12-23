import { Injectable } from '@nestjs/common'
import { CreateDocumentInput } from 'src/documents/dto/create-document.input'
import { UpdateDocumentInput } from 'src/documents/dto/update-document.input'
import { Document } from 'src/documents/entities/document.entity'
import { PrismaService } from 'src/prisma/prisma.service'
import { DocumentsRepository } from '../documents-repository'

@Injectable()
export class PrismaDocumentsRepository implements DocumentsRepository {
  constructor(private prisma: PrismaService) {}

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
    const newDocument = await this.prisma.document.create({
      data: {
        name,
        reference,
        updatedAt,
        fileURL,
        pdfURL,
        elaborator: { connect: { id: elaboratorId } },
        elaboratorAt,
        revisor: { connect: { id: revisorId } },
        revisorAt,
        approver: { connect: { id: approverId } },
        approverAt,
        status,
        unit: { connect: { id: unitId } },
        department: { connect: { id: departmentId } },
        DocumentCategory: { connect: { id: documentCategoryId } },
      },

      include: {
        elaborator: true,
        revisor: true,
        approver: true,
        unit: true,
        department: true,
        DocumentCategory: true,
      },
    })

    return newDocument
  }

  async findAll(): Promise<Document[]> {
    const documents = await this.prisma.document.findMany({
      include: {
        elaborator: true,
        revisor: true,
        approver: true,
        unit: true,
        department: true,
        DocumentCategory: true,
      },
    })

    return documents
  }

  async findOne(id: number): Promise<Document> {
    const document = await this.prisma.document.findUnique({
      where: { id },
      include: {
        elaborator: true,
        revisor: true,
        approver: true,
        unit: true,
        department: true,
        DocumentCategory: true,
      },
    })

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
  ): Promise<Document> {
    const updateDocument = await this.prisma.document.update({
      where: { id },
      data: {
        name,
        reference,
        updatedAt,
        fileURL,
        pdfURL,
        elaborator: { connect: { id: elaboratorId } },
        elaboratorAt,
        revisor: { connect: { id: revisorId } },
        revisorAt,
        approver: { connect: { id: approverId } },
        approverAt,
        status,
        unit: { connect: { id: unitId } },
        department: { connect: { id: departmentId } },
        DocumentCategory: { connect: { id: documentCategoryId } },
      },
      include: {
        elaborator: true,
        revisor: true,
        approver: true,
        unit: true,
        department: true,
        DocumentCategory: true,
      },
    })

    return updateDocument
  }

  remove(id: number): Promise<Document> {
    return this.prisma.document.delete({
      where: { id },
      include: {
        elaborator: true,
        revisor: true,
        approver: true,
        unit: true,
        department: true,
        DocumentCategory: true,
      },
    })
  }
}
