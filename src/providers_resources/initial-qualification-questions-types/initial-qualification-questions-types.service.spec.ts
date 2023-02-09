import { Test, TestingModule } from '@nestjs/testing';
import { InitialQualificationQuestionsTypesService } from './initial-qualification-questions-types.service';

describe('InitialQualificationQuestionsTypesService', () => {
  let service: InitialQualificationQuestionsTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InitialQualificationQuestionsTypesService],
    }).compile();

    service = module.get<InitialQualificationQuestionsTypesService>(
      InitialQualificationQuestionsTypesService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
