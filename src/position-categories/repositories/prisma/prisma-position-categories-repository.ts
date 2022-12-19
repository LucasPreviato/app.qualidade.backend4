import { Injectable } from '@nestjs/common';
import { CreatePositionCategoryInput } from 'src/position-categories/dto/create-position-category.input';
import { UpdatePositionCategoryInput } from 'src/position-categories/dto/update-position-category.input';
import { PositionCategory } from 'src/position-categories/entities/position-category.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { PositionCategoriesRepository } from '../position-categories-repository';

@Injectable()
export class PrismaPositionCategoriesRepository
  implements PositionCategoriesRepository
{
  constructor(private prisma: PrismaService) {}
  async create({
    name,
  }: CreatePositionCategoryInput): Promise<PositionCategory> {
    const newPositionCategory = await this.prisma.positionCategory.create({
      data: {
        name,
      },
    });
    return newPositionCategory;
  }
  async findAll(): Promise<PositionCategory[]> {
    const positionCategories = await this.prisma.positionCategory.findMany({});
    return positionCategories;
  }
  async findOne(id: number): Promise<PositionCategory> {
    const positionCategory = await this.prisma.positionCategory.findUnique({
      where: {
        id,
      },
    });
    return positionCategory;
  }
  async update(
    id: number,
    { name }: UpdatePositionCategoryInput,
  ): Promise<PositionCategory> {
    const updatePositionCategory = await this.prisma.positionCategory.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
    return updatePositionCategory;
  }
  async remove(id: number): Promise<PositionCategory> {
    return await this.prisma.positionCategory.delete({
      where: {
        id,
      },
    });
  }
}
