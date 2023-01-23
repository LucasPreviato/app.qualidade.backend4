import { Test, TestingModule } from '@nestjs/testing';
import { InitialQualificationQuestionsResolver } from './initial-qualification-questions.resolver';
import { InitialQualificationQuestionsService } from './initial-qualification-questions.service';

describe('InitialQualificationQuestionsResolver', () => {
  let resolver: InitialQualificationQuestionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InitialQualificationQuestionsResolver,
        InitialQualificationQuestionsService,
      ],
    }).compile();

    resolver = module.get<InitialQualificationQuestionsResolver>(
      InitialQualificationQuestionsResolver
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
