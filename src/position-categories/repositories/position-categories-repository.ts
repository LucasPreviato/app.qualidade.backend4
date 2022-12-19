import { CreatePositionCategoryInput } from '../dto/create-position-category.input';
import { UpdatePositionCategoryInput } from '../dto/update-position-category.input';
import { PositionCategory } from '../entities/position-category.entity';

export abstract class PositionCategoriesRepository {
  abstract create({
    name,
  }: CreatePositionCategoryInput): Promise<PositionCategory>;

  abstract findAll(): Promise<PositionCategory[]>;

  abstract findOne(id: number): Promise<PositionCategory | null>;

  abstract update(
    id: number,
    { name }: UpdatePositionCategoryInput,
  ): Promise<PositionCategory>;

  abstract remove(id: number): Promise<PositionCategory>;
}
