import { Injectable } from '@nestjs/common';
import { CreatePositionCategoryInput } from './dto/create-position-category.input';
import { UpdatePositionCategoryInput } from './dto/update-position-category.input';

@Injectable()
export class PositionCategoriesService {
  create(createPositionCategoryInput: CreatePositionCategoryInput) {
    return 'This action adds a new positionCategory';
  }

  findAll() {
    return `This action returns all positionCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} positionCategory`;
  }

  update(id: number, updatePositionCategoryInput: UpdatePositionCategoryInput) {
    return `This action updates a #${id} positionCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} positionCategory`;
  }
}
