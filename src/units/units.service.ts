import { Injectable } from '@nestjs/common';
import { CreateUnitInput } from './dto/create-unit.input';
import { UpdateUnitInput } from './dto/update-unit.input';
import { Unit } from './entities/unit.entity';
import { UnitsRepository } from './repositories/units-repository';

@Injectable()
export class UnitsService {
  constructor(private unitsRepository: UnitsRepository) {}

  async create({ name, email, phone }: CreateUnitInput): Promise<Unit> {
    return await this.unitsRepository.create({
      name,
      email,
      phone,
    });
  }

  async findAll(): Promise<Unit[]> {
    return await this.unitsRepository.findAll();
  }

  async findOne(id: number): Promise<Unit> {
    return await this.unitsRepository.findOne(id);
  }

  async update(
    id: number,
    { name, email, phone }: UpdateUnitInput,
  ): Promise<Unit> {
    return await this.unitsRepository.update(id, { name, email, phone });
  }

  async remove(id: number): Promise<Unit> {
    return await this.unitsRepository.remove(id);
  }

  async resolveGetUnit(id: number): Promise<Unit> {
    return await this.unitsRepository.resolveGetUnit(id);
  }
}
