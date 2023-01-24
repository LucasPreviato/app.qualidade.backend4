import { Test, TestingModule } from '@nestjs/testing';
import { InitialQualificationQuestionsTypesResolver } from './initial-qualification-questions-types.resolver';
import { InitialQualificationQuestionsTypesService } from './initial-qualification-questions-types.service';

describe('InitialQualificationQuestionsTypesResolver', () => {
  let resolver: InitialQualificationQuestionsTypesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InitialQualificationQuestionsTypesResolver,
        InitialQualificationQuestionsTypesService,
      ],
    }).compile();

    resolver = module.get<InitialQualificationQuestionsTypesResolver>(
      InitialQualificationQuestionsTypesResolver
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
