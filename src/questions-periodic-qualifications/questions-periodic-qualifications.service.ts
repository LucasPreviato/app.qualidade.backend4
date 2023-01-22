import { Injectable } from '@nestjs/common';
import { InputNotFoundException } from 'src/errors/input-not-found-exception';
import { CreateQuestionsPeriodicQualificationInput } from './dto/create-questions-periodic-qualification.input';
import { UpdateQuestionsPeriodicQualificationInput } from './dto/update-questions-periodic-qualification.input';
import { QuestionsPeriodicQualificationsRepository } from './repositories/questions-periodic-qualifications.repository';

@Injectable()
export class QuestionsPeriodicQualificationsService {
  constructor(
    private questionsPeriodicQualificationsRepository: QuestionsPeriodicQualificationsRepository
  ) {}
  async create(
    createQuestionsPeriodicQualificationInput: CreateQuestionsPeriodicQualificationInput
  ) {
    const newQuestionsPeriodicQualification =
      await this.questionsPeriodicQualificationsRepository.create(
        createQuestionsPeriodicQualificationInput
      );
    return newQuestionsPeriodicQualification;
  }

  async findAll() {
    return await this.questionsPeriodicQualificationsRepository.findAll();
  }

  async findOne(id: number) {
    const questionPeriodicQualification =
      await this.questionsPeriodicQualificationsRepository.findOne(id);
    if (!questionPeriodicQualification) {
      throw new InputNotFoundException(id);
    }
    return questionPeriodicQualification;
  }

  async update(
    id: number,
    updateQuestionsPeriodicQualificationInput: UpdateQuestionsPeriodicQualificationInput
  ) {
    const questionPeriodicQualification =
      await this.questionsPeriodicQualificationsRepository.update(
        id,
        updateQuestionsPeriodicQualificationInput
      );
    if (!questionPeriodicQualification) {
      throw new InputNotFoundException(id);
    }
    return questionPeriodicQualification;
  }

  async remove(id: number) {
    const questionPeriodicQualification =
      await this.questionsPeriodicQualificationsRepository.remove(id);
    if (!questionPeriodicQualification) {
      throw new InputNotFoundException(id);
    }
    return questionPeriodicQualification;
  }
}
