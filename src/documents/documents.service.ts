import { Injectable } from '@nestjs/common'
import { CreateDocumentInput } from './dto/create-document.input'
import { UpdateDocumentInput } from './dto/update-document.input'

@Injectable()
export class DocumentsService {
  create(createDocumentInput: CreateDocumentInput) {
    return 'This action adds a new document'
  }

  findAll() {
    return `This action returns all documents`
  }

  findOne(id: number) {
    return `This action returns a #${id} document`
  }

  update(id: number, updateDocumentInput: UpdateDocumentInput) {
    return `This action updates a #${id} document`
  }

  remove(id: number) {
    return `This action removes a #${id} document`
  }
}
