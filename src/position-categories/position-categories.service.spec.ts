import { Test, TestingModule } from '@nestjs/testing';
import { PositionCategoriesService } from './position-categories.service';

describe('PositionCategoriesService', () => {
  let service: PositionCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PositionCategoriesService],
    }).compile();

    service = module.get<PositionCategoriesService>(PositionCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
