import { Module } from '@nestjs/common';
import { QuestionsinitialqualificationsService } from './questions-initial-qualifications.service';
import { QuestionsinitialqualificationsResolver } from './questions-initial-qualification.resolver';
import { QuestionsInitialQualificationRepository } from './repositories/questions-initial-qualification-repository';
import { PrismaQuestionsInitialQualificationRepository } from './repositories/prisma/prisma-questions-initial-qualification-repository';

@Module({
  providers: [
    QuestionsinitialqualificationsResolver,
    QuestionsinitialqualificationsService,
    {
      provide: QuestionsInitialQualificationRepository,
      useClass: PrismaQuestionsInitialQualificationRepository,
    },
  ],
})
export class QuestionsinitialqualificationsModule {}
