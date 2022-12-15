import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PositionCategoriesService } from './position-categories.service';
import { PositionCategory } from './entities/position-category.entity';
import { CreatePositionCategoryInput } from './dto/create-position-category.input';
import { UpdatePositionCategoryInput } from './dto/update-position-category.input';

@Resolver(() => PositionCategory)
export class PositionCategoriesResolver {
  constructor(private readonly positionCategoriesService: PositionCategoriesService) {}

  @Mutation(() => PositionCategory)
  createPositionCategory(@Args('createPositionCategoryInput') createPositionCategoryInput: CreatePositionCategoryInput) {
    return this.positionCategoriesService.create(createPositionCategoryInput);
  }

  @Query(() => [PositionCategory], { name: 'positionCategories' })
  findAll() {
    return this.positionCategoriesService.findAll();
  }

  @Query(() => PositionCategory, { name: 'positionCategory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.positionCategoriesService.findOne(id);
  }

  @Mutation(() => PositionCategory)
  updatePositionCategory(@Args('updatePositionCategoryInput') updatePositionCategoryInput: UpdatePositionCategoryInput) {
    return this.positionCategoriesService.update(updatePositionCategoryInput.id, updatePositionCategoryInput);
  }

  @Mutation(() => PositionCategory)
  removePositionCategory(@Args('id', { type: () => Int }) id: number) {
    return this.positionCategoriesService.remove(id);
  }
}
