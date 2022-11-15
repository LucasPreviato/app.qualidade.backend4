import { Test, TestingModule } from '@nestjs/testing';
import { UnitsResolver } from './units.resolver';
import { UnitsService } from './units.service';

describe('UnitsResolver', () => {
  let resolver: UnitsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnitsResolver, UnitsService],
    }).compile();

    resolver = module.get<UnitsResolver>(UnitsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
