import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UnitsService } from './units.service';
import { Unit } from './entities/unit.entity';
import { CreateUnitInput } from './dto/create-unit.input';
import { UpdateUnitInput } from './dto/update-unit.input';

@Resolver(() => Unit)
export class UnitsResolver {
  constructor(private readonly unitsService: UnitsService) {}

  @Mutation(() => Unit)
  createUnit(@Args('createUnitInput') createUnitInput: CreateUnitInput) {
    return this.unitsService.create(createUnitInput);
  }

  @Query(() => [Unit], { name: 'units' })
  findAll() {
    return this.unitsService.findAll();
  }

  @Query(() => Unit, { name: 'unit' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.unitsService.findOne(id);
  }

  @Mutation(() => Unit)
  updateUnit(@Args('updateUnitInput') updateUnitInput: UpdateUnitInput) {
    return this.unitsService.update(updateUnitInput.id, updateUnitInput);
  }

  @Mutation(() => Unit)
  removeUnit(@Args('id', { type: () => Int }) id: number) {
    return this.unitsService.remove(id);
  }
}
