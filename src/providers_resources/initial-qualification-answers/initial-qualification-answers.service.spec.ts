import { Test, TestingModule } from '@nestjs/testing';
import { InitialQualificationAnswersService } from './initial-qualification-answers.service';

describe('InitialQualificationAnswersService', () => {
  let service: InitialQualificationAnswersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InitialQualificationAnswersService],
    }).compile();

    service = module.get<InitialQualificationAnswersService>(
      InitialQualificationAnswersService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
