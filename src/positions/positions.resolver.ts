import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PositionsService } from './positions.service';
import { Position } from './entities/position.entity';
import { CreatePositionInput } from './dto/create-position.input';
import { UpdatePositionInput } from './dto/update-position.input';

@Resolver(() => Position)
export class PositionsResolver {
  constructor(private readonly positionsService: PositionsService) {}

  @Mutation(() => Position)
  createPosition(@Args('createPositionInput') createPositionInput: CreatePositionInput) {
    return this.positionsService.create(createPositionInput);
  }

  @Query(() => [Position], { name: 'positions' })
  findAll() {
    return this.positionsService.findAll();
  }

  @Query(() => Position, { name: 'position' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.positionsService.findOne(id);
  }

  @Mutation(() => Position)
  updatePosition(@Args('updatePositionInput') updatePositionInput: UpdatePositionInput) {
    return this.positionsService.update(updatePositionInput.id, updatePositionInput);
  }

  @Mutation(() => Position)
  removePosition(@Args('id', { type: () => Int }) id: number) {
    return this.positionsService.remove(id);
  }
}
