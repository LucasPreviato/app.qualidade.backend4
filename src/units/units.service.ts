import { Injectable } from '@nestjs/common';
import { CreateUnitInput } from './dto/create-unit.input';
import { UpdateUnitInput } from './dto/update-unit.input';
import { Unit } from './entities/unit.entity';
import { PrismaUnitsRepository } from './repositories/implementations/prisma.repository';

@Injectable()
export class UnitsService {
  constructor(private unitsRepository: PrismaUnitsRepository) {}
  async create({ name, email, phone }: CreateUnitInput): Promise<Unit> {
    {
      const unit = await this.unitsRepository.create({ name, email, phone });
      return unit;
    }
  }
  async findAll(): Promise<Unit[]> {
    const units = await this.unitsRepository.findAll();
    return units;
  }

  async findOne(id: number): Promise<Unit | null> {
    const unit = await this.unitsRepository.findOne(id);
    return unit;
  }

  async update(id: number, updateUnitInput: UpdateUnitInput): Promise<Unit> {
    const unit = this.unitsRepository.update(id, updateUnitInput);
    return unit;
  }

  async remove(id: number): Promise<void> {
    await this.unitsRepository.remove(id);
  }
}
