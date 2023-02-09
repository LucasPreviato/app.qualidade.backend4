import { Injectable } from '@nestjs/common';
import { CreateInitialQualificationAnswerInput } from './dto/create-initial-qualification-answer.input';
import { UpdateInitialQualificationAnswerInput } from './dto/update-initial-qualification-answer.input';

@Injectable()
export class InitialQualificationAnswersService {
  create(
    createInitialQualificationAnswerInput: CreateInitialQualificationAnswerInput
  ) {
    return 'This action adds a new initialQualificationAnswer';
  }

  findAll() {
    return `This action returns all initialQualificationAnswers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} initialQualificationAnswer`;
  }

  update(
    id: number,
    updateInitialQualificationAnswerInput: UpdateInitialQualificationAnswerInput
  ) {
    return `This action updates a #${id} initialQualificationAnswer`;
  }

  remove(id: number) {
    return `This action removes a #${id} initialQualificationAnswer`;
  }
}
