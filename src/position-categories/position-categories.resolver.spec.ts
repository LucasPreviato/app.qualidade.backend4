import { Test, TestingModule } from '@nestjs/testing';
import { PositionCategoriesResolver } from './position-categories.resolver';
import { PositionCategoriesService } from './position-categories.service';

describe('PositionCategoriesResolver', () => {
  let resolver: PositionCategoriesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PositionCategoriesResolver, PositionCategoriesService],
    }).compile();

    resolver = module.get<PositionCategoriesResolver>(
      PositionCategoriesResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
