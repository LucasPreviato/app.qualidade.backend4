import { Test, TestingModule } from '@nestjs/testing'
import { DocumentsCategoriesService } from './documents-categories.service'

describe('DocumentsCategoriesService', () => {
  let service: DocumentsCategoriesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocumentsCategoriesService],
    }).compile()

    service = module.get<DocumentsCategoriesService>(DocumentsCategoriesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
