import { Injectable } from '@nestjs/common';
import { CreateInitialQualificationQuestionInput } from './dto/create-initial-qualification-question.input';
import { UpdateInitialQualificationQuestionInput } from './dto/update-initial-qualification-question.input';

@Injectable()
export class InitialQualificationQuestionsService {
  create(
    createInitialQualificationQuestionInput: CreateInitialQualificationQuestionInput
  ) {
    return 'This action adds a new initialQualificationQuestion';
  }

  findAll() {
    return `This action returns all initialQualificationQuestions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} initialQualificationQuestion`;
  }

  update(
    id: number,
    updateInitialQualificationQuestionInput: UpdateInitialQualificationQuestionInput
  ) {
    return `This action updates a #${id} initialQualificationQuestion`;
  }

  remove(id: number) {
    return `This action removes a #${id} initialQualificationQuestion`;
  }
}
