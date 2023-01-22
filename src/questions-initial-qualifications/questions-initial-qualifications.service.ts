import { Injectable } from '@nestjs/common';
import { InputNotFoundException } from 'src/errors/input-not-found-exception';
import { CreateQuestionsinitialqualificationInput } from './dto/create-questions-initial-qualification.input';
import { UpdateQuestionsinitialqualificationInput } from './dto/update-questions-initial-qualification.input';
import { QuestionsInitialQualificationRepository } from './repositories/questions-initial-qualification-repository';

@Injectable()
export class QuestionsinitialqualificationsService {
  constructor(
    private questionsInitialQualificationRepository: QuestionsInitialQualificationRepository
  ) {}
  async create(
    createQuestionsinitialqualificationInput: CreateQuestionsinitialqualificationInput
  ) {
    const data = await this.questionsInitialQualificationRepository.create(
      createQuestionsinitialqualificationInput
    );
    return data;
  }

  async findAll() {
    return await this.questionsInitialQualificationRepository.findAll();
  }

  findOne(id: number) {
    const question = this.questionsInitialQualificationRepository.findOne(id);
    if (!question) {
      throw new InputNotFoundException(id);
    }
    return question;
  }

  async update(
    id: number,
    updateQuestionsinitialqualificationInput: UpdateQuestionsinitialqualificationInput
  ) {
    const question = await this.questionsInitialQualificationRepository.update(
      id,
      updateQuestionsinitialqualificationInput
    );
    if (!question) {
      throw new InputNotFoundException(id);
    }
    return question;
  }

  async remove(id: number) {
    const question = await this.questionsInitialQualificationRepository.remove(
      id
    );
    if (!question) {
      throw new InputNotFoundException(id);
    }
    return question;
  }
}
