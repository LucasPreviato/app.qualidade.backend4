import { Test, TestingModule } from '@nestjs/testing';
import { ProvidersCategoriesService } from './providers-categories.service';

describe('ProvidersCategoriesService', () => {
  let service: ProvidersCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProvidersCategoriesService],
    }).compile();

    service = module.get<ProvidersCategoriesService>(
      ProvidersCategoriesService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
