import { Test, TestingModule } from '@nestjs/testing';
import { InitialQualificationsService } from './initial-qualifications.service';

describe('InitialQualificationsService', () => {
  let service: InitialQualificationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InitialQualificationsService],
    }).compile();

    service = module.get<InitialQualificationsService>(
      InitialQualificationsService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
