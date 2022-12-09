import { Injectable } from '@nestjs/common';
import { CreateDepartmentInput } from 'src/departments/dto/create-department.input';
import { UpdateDepartmentInput } from 'src/departments/dto/update-department.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { DepartmentsRepository } from '../departments-repository';

@Injectable()
export class PrismaDepartmentsRepository implements DepartmentsRepository {
  constructor(private prisma: PrismaService) {}

  async create({ name, email, initials, unitId }: CreateDepartmentInput) {
    const newDepartment = await this.prisma.department.create({
      data: {
        name,
        email,
        initials,
        unitId,
      },

      include: { unit: true },
    });
    return newDepartment;
  }

  async findAll() {
    const departments = await this.prisma.department.findMany({
      include: { unit: true },
    });
    return departments;
  }

  async findOne(id: number) {
    const department = await this.prisma.department.findUnique({
      where: {
        id,
      },

      include: { unit: true },
    });
    return department;
  }

  async update(
    id: number,
    { name, email, initials, unitId }: UpdateDepartmentInput,
  ) {
    const updateDepartment = await this.prisma.department.update({
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
    return updateDepartment;
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
