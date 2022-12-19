import { CreatePositionInput } from 'src/positions/dto/create-position.input';
import { UpdatePositionInput } from 'src/positions/dto/update-position.input';
import { Position } from 'src/positions/entities/position.entity';

export abstract class PositionsRepository {
  abstract create({
    name,
    requiredQualifications,
    desiredQualifications,
    requiredEducation,
    desiredEducation,
    requiredExperience,
    desiredExperience,
    version,
    alterations,
    positionCategoryId,
  }: CreatePositionInput): Promise<Position>;
  abstract findAll(): Promise<Position[]>;
  abstract findOne(id: number): Promise<Position | null>;
  abstract update(
    id: number,
    updatePositionInput: UpdatePositionInput,
  ): Promise<Position>;
  abstract remove(id: number): Promise<Position>;
}
