import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUnitInput } from 'src/units/dto/create-unit.input';
import { UpdateUnitInput } from 'src/units/dto/update-unit.input';
import { Unit } from 'src/units/entities/unit.entity';
import { UnitsRepository } from '../units-repository';

@Injectable()
export class PrismaUnitsRepository implements UnitsRepository {
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

  async findAll() {
    return await this.prisma.unit.findMany({
      include: { departments: true },
    });
  }

  async findOne(id: number) {
    return await this.prisma.unit.findUnique({
      where: {
        id,
      },

      include: { departments: true },
    });
  }

  async update(id: number, { name, email, phone }: UpdateUnitInput) {
    return await this.prisma.unit.update({
      where: {
        id,
      },

      data: {
        name,
        email,
        phone,
      },

      include: { departments: true },
    });
  }

  async remove(id: number) {
    return await this.prisma.unit.delete({
      where: {
        id,
      },

      include: { departments: true },
    });
  }

  async resolveGetUnit(id: number) {
    const department = await this.prisma.department.findUnique({
      where: {
        id,
      },
    });

    return await this.prisma.unit.findUnique({
      where: {
        id: department.unitId,
      },
    });
  }
}
