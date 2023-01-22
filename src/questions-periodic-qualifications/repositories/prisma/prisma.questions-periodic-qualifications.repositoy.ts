import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuestionsPeriodicQualificationInput } from 'src/questions-periodic-qualifications/dto/create-questions-periodic-qualification.input';
import { UpdateQuestionsPeriodicQualificationInput } from 'src/questions-periodic-qualifications/dto/update-questions-periodic-qualification.input';
import { QuestionsPeriodicQualification } from 'src/questions-periodic-qualifications/entities/questions-periodic-qualification.entity';
import { QuestionsPeriodicQualificationsRepository } from '../questions-periodic-qualifications.repository';

@Injectable()
export class PrismaQuestionsPeriodicQualificationsRepository
  implements QuestionsPeriodicQualificationsRepository
{
  constructor(private prisma: PrismaService) {}

  async create({
    question,
    typeOfAnswer,
    providersCategoryId,
  }: CreateQuestionsPeriodicQualificationInput): Promise<QuestionsPeriodicQualification> {
    const newQuestionsPeriodicQualification =
      await this.prisma.questionsPeriodicQualification.create({
        data: {
          question,
          typeOfAnswer,
          providerCategory: { connect: { id: providersCategoryId } },
        },
        include: { providerCategory: true },
      });
    return newQuestionsPeriodicQualification;
  }
  async findAll(): Promise<QuestionsPeriodicQualification[]> {
    const questionsPeriodicQualification =
      this.prisma.questionsPeriodicQualification.findMany({
        include: { providerCategory: true },
      });
    return questionsPeriodicQualification;
  }
  async findOne(id: number): Promise<QuestionsPeriodicQualification> {
    const questionPeriodicQualification =
      this.prisma.questionsPeriodicQualification.findUnique({
        where: { id },
        include: { providerCategory: true },
      });
    return questionPeriodicQualification;
  }
  async update(
    id: number,
    { question }: UpdateQuestionsPeriodicQualificationInput
  ): Promise<QuestionsPeriodicQualification> {
    const updateQuestionsPeriodicQualification =
      this.prisma.questionsPeriodicQualification.update({
        where: { id },
        data: { question },
        include: { providerCategory: true },
      });
    return updateQuestionsPeriodicQualification;
  }
  async remove(id: number): Promise<QuestionsPeriodicQualification> {
    const removeQuestionsPeriodicQualification =
      this.prisma.questionsPeriodicQualification.delete({
        where: { id },
        include: { providerCategory: true },
      });
    return removeQuestionsPeriodicQualification;
  }
}
