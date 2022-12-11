import { Injectable } from '@nestjs/common';
import { InputNotFoundException } from 'src/errors/input-not-found-exception';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';
import { Department } from './entities/department.entity';
import { DepartmentsRepository } from './repositories/departments-repository';

@Injectable()
export class DepartmentsService {
  constructor(private departmentsRepository: DepartmentsRepository) {}

  async create({
    name,
    email,
    initials,
    unitId,
  }: CreateDepartmentInput): Promise<Department> {
    return await this.departmentsRepository.create({
      name,
      email,
      initials,
      unitId,
    });
  }

  async findAll(): Promise<Department[]> {
    return await this.departmentsRepository.findAll();
  }

  async findOne(id: number): Promise<Department> {
    const department = await this.departmentsRepository.findOne(id);
    if (!department) {
      throw new InputNotFoundException(id);
    }
    return department;
  }

  async update(
    id: number,
    { name, email, initials, unitId }: UpdateDepartmentInput,
  ) {
    const updateDepartment = await this.departmentsRepository.update(id, {
      id,
      name,
      email,
      initials,
      unitId,
    });
    return updateDepartment;
  }

  async remove(id: number) {
    const existingDepartment = await this.departmentsRepository.findOne(id);
    if (!existingDepartment) {
      throw new InputNotFoundException(id);
    }
    return await this.departmentsRepository.remove(id);
  }

  async resolveGetDepartment(id: number): Promise<Department> {
    return await this.departmentsRepository.resolveGetDepartment(id);
  }
}
