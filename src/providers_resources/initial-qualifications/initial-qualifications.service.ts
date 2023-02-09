import { Injectable } from '@nestjs/common';
import { CreateInitialQualificationInput } from './dto/create-initial-qualification.input';
import { UpdateInitialQualificationInput } from './dto/update-initial-qualification.input';

@Injectable()
export class InitialQualificationsService {
  create(createInitialQualificationInput: CreateInitialQualificationInput) {
    return 'This action adds a new initialQualification';
  }

  findAll() {
    return `This action returns all initialQualifications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} initialQualification`;
  }

  update(
    id: number,
    updateInitialQualificationInput: UpdateInitialQualificationInput
  ) {
    return `This action updates a #${id} initialQualification`;
  }

  remove(id: number) {
    return `This action removes a #${id} initialQualification`;
  }
}
