import { Injectable } from '@nestjs/common';
import { InputNotFoundException } from 'src/errors/input-not-found-exception';
import { CreatePositionCategoryInput } from './dto/create-position-category.input';
import { UpdatePositionCategoryInput } from './dto/update-position-category.input';
import { PositionCategory } from './entities/position-category.entity';
import { PositionCategoriesRepository } from './repositories/position-categories-repository';

@Injectable()
export class PositionCategoriesService {
  constructor(
    private positionCategoriesRepository: PositionCategoriesRepository,
  ) {}
  async create({
    name,
  }: CreatePositionCategoryInput): Promise<PositionCategory> {
    return await this.positionCategoriesRepository.create({ name });
  }

  async findAll(): Promise<PositionCategory[]> {
    return await this.positionCategoriesRepository.findAll();
  }

  async findOne(id: number): Promise<PositionCategory> {
    const positionCategory = await this.positionCategoriesRepository.findOne(
      id,
    );
    if (!positionCategory) {
      throw new InputNotFoundException(id);
    }
    return positionCategory;
  }

  async update(
    id: number,
    updatePositionCategoryInput: UpdatePositionCategoryInput,
  ): Promise<PositionCategory> {
    return await this.positionCategoriesRepository.update(
      id,
      updatePositionCategoryInput,
    );
  }

  async remove(id: number): Promise<PositionCategory> {
    return await this.positionCategoriesRepository.remove(id);
  }
}
