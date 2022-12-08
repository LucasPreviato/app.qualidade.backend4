import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Unit } from 'src/units/entities/unit.entity';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';

@Injectable()
export class DepartmentsService {
  constructor(private prisma: PrismaService) {}

  async create({ name, email, initials, unitId }: CreateDepartmentInput) {
    return await this.prisma.department.create({
      data: {
        name,
        email,
        initials,
        unitId,
      },

      include: { unit: true },
    });
  }

  async findAll() {
    return await this.prisma.department.findMany({
      include: { unit: true },
    });
  }

  async findOne(id: number) {
    return await this.prisma.department.findUnique({
      where: {
        id,
      },

      include: { unit: true },
    });
  }

  async update(
    id: number,
    { name, email, initials, unitId }: UpdateDepartmentInput,
  ) {
    return await this.prisma.department.update({
      where: {
        id,
      },

      data: {
        name,
        email,
        initials,
        unitId,
      },

      include: { unit: true },
    });
  }

  async remove(id: number) {
    return await this.prisma.department.delete({
      where: {
        id,
      },

      include: { unit: true },
    });
  }
}
