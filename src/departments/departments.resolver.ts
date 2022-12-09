import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { DepartmentsService } from './departments.service';
import { Department } from './entities/department.entity';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';
import { Unit } from 'src/units/entities/unit.entity';
import { UnitsService } from 'src/units/units.service';

@Resolver(() => Department)
export class DepartmentsResolver {
  constructor(
    private readonly departmentsService: DepartmentsService,
    private readonly unitsService: UnitsService,
  ) {}

  @Mutation(() => Department)
  async createDepartment(
    @Args('createDepartmentInput') createDepartmentInput: CreateDepartmentInput,
  ) {
    return await this.departmentsService.create(createDepartmentInput);
  }

  @Query(() => [Department], { name: 'departments' })
  async findAll() {
    return await this.departmentsService.findAll();
  }

  @Query(() => Department, { name: 'department' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.departmentsService.findOne(id);
  }

  @Mutation(() => Department)
  async updateDepartment(
    @Args('updateDepartmentInput') updateDepartmentInput: UpdateDepartmentInput,
  ) {
    return await this.departmentsService.update(
      updateDepartmentInput.id,
      updateDepartmentInput,
    );
  }

  @Mutation(() => Department)
  async removeDepartment(@Args('id', { type: () => Int }) id: number) {
    return await this.departmentsService.remove(id);
  }

  @ResolveField(() => Unit)
  async unit(@Parent() department: Department) {
    const { id } = department;

    return await this.unitsService.resolveGetUnit(id);
  }
}
