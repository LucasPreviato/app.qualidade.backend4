import { Module } from '@nestjs/common';
import { InitialQualificationQuestionsTypesService } from './initial-qualification-questions-types.service';
import { InitialQualificationQuestionsTypesResolver } from './initial-qualification-questions-types.resolver';

@Module({
  providers: [
    InitialQualificationQuestionsTypesResolver,
    InitialQualificationQuestionsTypesService,
  ],
})
export class InitialQualificationQuestionsTypesModule {}
