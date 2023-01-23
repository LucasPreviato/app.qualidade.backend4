import { Test, TestingModule } from '@nestjs/testing';
import { InitialQualificationAnswersResolver } from './initial-qualification-answers.resolver';
import { InitialQualificationAnswersService } from './initial-qualification-answers.service';

describe('InitialQualificationAnswersResolver', () => {
  let resolver: InitialQualificationAnswersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InitialQualificationAnswersResolver,
        InitialQualificationAnswersService,
      ],
    }).compile();

    resolver = module.get<InitialQualificationAnswersResolver>(
      InitialQualificationAnswersResolver
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
