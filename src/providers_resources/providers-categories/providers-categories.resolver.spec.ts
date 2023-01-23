import { Test, TestingModule } from '@nestjs/testing';
import { ProvidersCategoriesResolver } from './providers-categories.resolver';
import { ProvidersCategoriesService } from './providers-categories.service';

describe('ProvidersCategoriesResolver', () => {
  let resolver: ProvidersCategoriesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProvidersCategoriesResolver, ProvidersCategoriesService],
    }).compile();

    resolver = module.get<ProvidersCategoriesResolver>(
      ProvidersCategoriesResolver
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
