import { Injectable } from '@nestjs/common';
import { InputNotFoundException } from 'src/errors/input-not-found-exception';
import { PositionsRepository } from 'src/positions/repositories/position-repository';
import { CreatePositionInput } from './dto/create-position.input';
import { UpdatePositionInput } from './dto/update-position.input';
import { Position } from './entities/position.entity';

@Injectable()
export class PositionsService {
  constructor(private positionsRepository: PositionsRepository) {}
  async create(createPositionInput: CreatePositionInput): Promise<Position> {
    return await this.positionsRepository.create(createPositionInput);
  }

  async findAll(): Promise<Position[]> {
    return await this.positionsRepository.findAll();
  }

  async findOne(id: number): Promise<Position> {
    const department = await this.positionsRepository.findOne(id);
    if (!department) {
      throw new InputNotFoundException(id);
    }
    return department;
  }

  async update(id: number, updatePositionInput: UpdatePositionInput) {
    const updateDepartment = await this.positionsRepository.update(
      id,
      updatePositionInput,
    );
    return updateDepartment;
  }

  async remove(id: number) {
    const existingPosition = this.positionsRepository.findOne(id);
    if (!existingPosition) {
      throw new InputNotFoundException(id);
    }
    return await this.positionsRepository.remove(id);
  }
}
