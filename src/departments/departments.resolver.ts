import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DepartmentsService } from './departments.service';
import { Department } from './entities/department.entity';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';

@Resolver(() => Department)
export class DepartmentsResolver {
  constructor(private readonly departmentsService: DepartmentsService) {}

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
}
