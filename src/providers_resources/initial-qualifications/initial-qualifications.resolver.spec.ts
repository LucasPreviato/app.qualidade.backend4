import { Test, TestingModule } from '@nestjs/testing';
import { InitialQualificationsResolver } from './initial-qualifications.resolver';
import { InitialQualificationsService } from './initial-qualifications.service';

describe('InitialQualificationsResolver', () => {
  let resolver: InitialQualificationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InitialQualificationsResolver, InitialQualificationsService],
    }).compile();

    resolver = module.get<InitialQualificationsResolver>(
      InitialQualificationsResolver
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
