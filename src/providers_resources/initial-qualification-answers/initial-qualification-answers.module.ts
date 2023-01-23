import { Module } from '@nestjs/common';
import { InitialQualificationAnswersService } from './initial-qualification-answers.service';
import { InitialQualificationAnswersResolver } from './initial-qualification-answers.resolver';

@Module({
  providers: [
    InitialQualificationAnswersResolver,
    InitialQualificationAnswersService,
  ],
})
export class InitialQualificationAnswersModule {}
