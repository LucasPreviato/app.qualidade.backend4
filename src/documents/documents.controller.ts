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
  Inject,
  LoggerService,
} from '@nestjs/common'
import { CreateDocumentInput } from './dto/create-document.input'
import { UpdateDocumentInput } from './dto/update-document.input'
import { DocumentsService } from './documents.service'
import { FileInterceptor } from '@nestjs/platform-express'
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston'

@Controller('/documents')
export class DocumentsController {
  constructor(
    private readonly documentsService: DocumentsService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('documentFile'))
  async createDocument(
    @Body() createDocumentInput: CreateDocumentInput,
    @UploadedFile() file: Express.Multer.File
  ) {
    this.logger.log({ message: 'Started Create Document', level: 'info' })
    return this.documentsService.create(createDocumentInput, file)
  }

  @Get()
  async findAll() {
    this.logger.log({ message: 'Started Find All Documents', level: 'info' })
    return this.documentsService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    this.logger.log({ message: 'Started Find Document', level: 'info' })
    return this.documentsService.findOne(id)
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('documentFile'))
  async updateDocument(
    @Body() updateDocumentInput: UpdateDocumentInput,
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: number
  ) {
    this.logger.log({ message: 'Started Update Document', level: 'info' })
    return this.documentsService.update(id, updateDocumentInput, file)
  }

  @Delete(':id')
  async removeDocument(@Param('id') id: number) {
    this.logger.log({ message: 'Started Delete Document', level: 'info' })
    return this.documentsService.remove(id)
  }
}
