import { Injectable } from '@nestjs/common';
import { CreateInitialQualificationQuestionsTypeInput } from './dto/create-initial-qualification-questions-type.input';
import { UpdateInitialQualificationQuestionsTypeInput } from './dto/update-initial-qualification-questions-type.input';

@Injectable()
export class InitialQualificationQuestionsTypesService {
  create(
    createInitialQualificationQuestionsTypeInput: CreateInitialQualificationQuestionsTypeInput
  ) {
    return 'This action adds a new initialQualificationQuestionsType';
  }

  findAll() {
    return `This action returns all initialQualificationQuestionsTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} initialQualificationQuestionsType`;
  }

  update(
    id: number,
    updateInitialQualificationQuestionsTypeInput: UpdateInitialQualificationQuestionsTypeInput
  ) {
    return `This action updates a #${id} initialQualificationQuestionsType`;
  }

  remove(id: number) {
    return `This action removes a #${id} initialQualificationQuestionsType`;
  }
}
