import { Injectable } from '@nestjs/common';
import { CreatePositionInput } from './dto/create-position.input';
import { UpdatePositionInput } from './dto/update-position.input';

@Injectable()
export class PositionsService {
  create(createPositionInput: CreatePositionInput) {
    return 'This action adds a new position';
  }

  findAll() {
    return `This action returns all positions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} position`;
  }

  update(id: number, updatePositionInput: UpdatePositionInput) {
    return `This action updates a #${id} position`;
  }

  remove(id: number) {
    return `This action removes a #${id} position`;
  }
}
