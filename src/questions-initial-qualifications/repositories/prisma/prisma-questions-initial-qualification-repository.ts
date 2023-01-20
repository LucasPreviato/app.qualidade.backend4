import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuestionsinitialqualificationInput } from 'src/questions-initial-qualifications/dto/create-questions-initial-qualification.input';
import { UpdateQuestionsinitialqualificationInput } from 'src/questions-initial-qualifications/dto/update-questions-initial-qualification.input';
import { QuestionsInitialQualification } from 'src/questions-initial-qualifications/entities/questions-initial-qualification.entity';
import { QuestionsInitialQualificationRepository } from '../questions-initial-qualification-repository';

@Injectable()
export class PrismaQuestionsInitialQualificationRepository
  implements QuestionsInitialQualificationRepository
{
  constructor(private prisma: PrismaService) {}
  async create({
    question,
    typeOfAnswer,
    providersCategoryId,
  }: CreateQuestionsinitialqualificationInput): Promise<QuestionsInitialQualification> {
    const newQuestionsInitialQualification =
      await this.prisma.questionsInitialQualification.create({
        data: {
          question,
          typeOfAnswer,
          providerCategory: { connect: { id: providersCategoryId } },
        },
        include: { providerCategory: true },
      });
    return newQuestionsInitialQualification;
  }
  findAll(): Promise<QuestionsInitialQualification[]> {
    const questionsInitialQualification =
      this.prisma.questionsInitialQualification.findMany({
        include: { providerCategory: true },
      });
    return questionsInitialQualification;
  }
  findOne(id: number): Promise<QuestionsInitialQualification> {
    const questionsInitialQualification =
      this.prisma.questionsInitialQualification.findUnique({
        where: { id },
        include: { providerCategory: true },
      });
    return questionsInitialQualification;
  }
  update(
    id: number,
    {
      question,
      typeOfAnswer,
      providersCategoryId,
    }: UpdateQuestionsinitialqualificationInput
  ): Promise<QuestionsInitialQualification> {
    const questionsInitialQualification =
      this.prisma.questionsInitialQualification.update({
        where: { id },
        data: {
          question,
          typeOfAnswer,
          providerCategory: { connect: { id: providersCategoryId } },
        },
        include: { providerCategory: true },
      });
    return questionsInitialQualification;
  }
  remove(id: number): Promise<QuestionsInitialQualification> {
    const questionsInitialQualification =
      this.prisma.questionsInitialQualification.delete({
        where: { id },
        include: { providerCategory: true },
      });
    return questionsInitialQualification;
  }
}
