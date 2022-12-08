import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUnitInput } from './dto/create-unit.input';
import { UpdateUnitInput } from './dto/update-unit.input';

@Injectable()
export class UnitsService {
  constructor(private prisma: PrismaService) {}

  async create({ name, email, phone }: CreateUnitInput) {
    return await this.prisma.unit.create({
      data: {
        name,
        email,
        phone,
      },

      include: { departments: true },
    });
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
