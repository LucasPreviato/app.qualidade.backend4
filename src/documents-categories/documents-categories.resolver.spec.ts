import { Test, TestingModule } from '@nestjs/testing'
import { DocumentsCategoriesResolver } from './documents-categories.resolver'
import { DocumentsCategoriesService } from './documents-categories.service'

describe('DocumentsCategoriesResolver', () => {
  let resolver: DocumentsCategoriesResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocumentsCategoriesResolver, DocumentsCategoriesService],
    }).compile()

    resolver = module.get<DocumentsCategoriesResolver>(
      DocumentsCategoriesResolver
    )
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
