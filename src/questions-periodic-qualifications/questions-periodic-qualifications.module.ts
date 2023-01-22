import { Module } from '@nestjs/common';
import { QuestionsPeriodicQualificationsService } from './questions-periodic-qualifications.service';
import { QuestionsPeriodicQualificationsResolver } from './questions-periodic-qualifications.resolver';
import { QuestionsPeriodicQualificationsRepository } from './repositories/questions-periodic-qualifications.repository';
import { PrismaQuestionsPeriodicQualificationsRepository } from './repositories/prisma/prisma.questions-periodic-qualifications.repositoy';

@Module({
  providers: [
    QuestionsPeriodicQualificationsResolver,
    QuestionsPeriodicQualificationsService,
    {
      provide: QuestionsPeriodicQualificationsRepository,
      useClass: PrismaQuestionsPeriodicQualificationsRepository,
    },
  ],
})
export class QuestionsPeriodicQualificationsModule {}
