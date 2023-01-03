import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common'
import { CreateDocumentInput } from './dto/create-document.input'
import { UpdateDocumentInput } from './dto/update-document.input'
import { DocumentsService } from './documents.service'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('/documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('documentFile'))
  async createDocument(
    @Body() createDocumentInput: CreateDocumentInput,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.documentsService.create(createDocumentInput, file)
  }

  @Get()
  async findAll() {
    return this.documentsService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.documentsService.findOne(id)
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('documentFile'))
  async updateDocument(
    @Body() updateDocumentInput: UpdateDocumentInput,
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: number
  ) {
    return this.documentsService.update(id, updateDocumentInput, file)
  }

  @Delete(':id')
  async removeDocument(@Param('id') id: number) {
    return this.documentsService.remove(id)
  }
}
