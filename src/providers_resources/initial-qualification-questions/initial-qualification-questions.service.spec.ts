import { Test, TestingModule } from '@nestjs/testing';
import { InitialQualificationQuestionsService } from './initial-qualification-questions.service';

describe('InitialQualificationQuestionsService', () => {
  let service: InitialQualificationQuestionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InitialQualificationQuestionsService],
    }).compile();

    service = module.get<InitialQualificationQuestionsService>(
      InitialQualificationQuestionsService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
