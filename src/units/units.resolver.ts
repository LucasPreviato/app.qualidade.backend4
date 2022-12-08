import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UnitsService } from './units.service';
import { Unit } from './entities/unit.entity';
import { CreateUnitInput } from './dto/create-unit.input';
import { UpdateUnitInput } from './dto/update-unit.input';

@Resolver(() => Unit)
export class UnitsResolver {
  constructor(private readonly unitsService: UnitsService) {}

  @Mutation(() => Unit)
  async createUnit(@Args('createUnitInput') createUnitInput: CreateUnitInput) {
    return await this.unitsService.create(createUnitInput);
  }

  @Query(() => [Unit], { name: 'units' })
  async findAll() {
    return await this.unitsService.findAll();
  }

  @Query(() => Unit, { name: 'unit' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.unitsService.findOne(id);
  }

  @Mutation(() => Unit)
  async updateUnit(@Args('updateUnitInput') updateUnitInput: UpdateUnitInput) {
    return await this.unitsService.update(updateUnitInput.id, updateUnitInput);
  }

  @Mutation(() => Unit)
  async removeUnit(@Args('id', { type: () => Int }) id: number) {
    return await this.unitsService.remove(id);
  }
}
