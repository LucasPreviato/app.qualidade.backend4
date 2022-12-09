import { CreateDepartmentInput } from '../dto/create-department.input';
import { UpdateDepartmentInput } from '../dto/update-department.input';
import { Department } from '../entities/department.entity';

export abstract class DepartmentsRepository {
  abstract create({
    name,
    email,
    initials,
    unitId,
  }: CreateDepartmentInput): Promise<Department>;

  abstract findAll(): Promise<Department[]>;

  abstract findOne(id: number): Promise<Department | null>;

  abstract update(
    id: number,
    { name, email, initials, unitId }: UpdateDepartmentInput,
  ): Promise<Department>;

  abstract remove(id: number): Promise<Department>;
}
