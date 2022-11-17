import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUnitInput } from 'src/units/dto/create-unit.input';
import { UpdateUnitInput } from 'src/units/dto/update-unit.input';
import { Unit } from 'src/units/entities/unit.entity';
import { IUnitsRepository } from '../units.repository';

@Injectable()
export class PrismaUnitsRepository implements IUnitsRepository {
  constructor(private prisma: PrismaService) {}

  async create({ name, email, phone }: CreateUnitInput): Promise<Unit> {
    const unit = await this.prisma.unit.create({
      data: {
        name,
        email,
        phone,
      },
    });
    return unit;
  }

  async findAll(): Promise<Unit[]> {
    const units = await this.prisma.unit.findMany();
    return units;
  }

  async findOne(id: number): Promise<Unit | null> {
    const unit = await this.prisma.unit.findUnique({
      where: { id },
    });
    return unit;
  }

  async update(id: number, updateUnitInput: UpdateUnitInput): Promise<Unit> {
    return this.prisma.unit.update({
      where: { id },
      data: updateUnitInput,
    });
  }
  async remove(id: number): Promise<void> {
    await this.prisma.unit.delete({
      where: { id },
    });
  }
}
