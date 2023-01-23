import { Module } from '@nestjs/common';
import { InitialQualificationQuestionsService } from './initial-qualification-questions.service';
import { InitialQualificationQuestionsResolver } from './initial-qualification-questions.resolver';

@Module({
  providers: [
    InitialQualificationQuestionsResolver,
    InitialQualificationQuestionsService,
  ],
})
export class InitialQualificationQuestionsModule {}
