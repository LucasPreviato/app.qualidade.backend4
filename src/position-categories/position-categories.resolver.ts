import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PositionCategoriesService } from './position-categories.service';
import { PositionCategory } from './entities/position-category.entity';
import { CreatePositionCategoryInput } from './dto/create-position-category.input';
import { UpdatePositionCategoryInput } from './dto/update-position-category.input';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Inject, LoggerService } from '@nestjs/common';

@Resolver(() => PositionCategory)
export class PositionCategoriesResolver {
  constructor(
    private readonly positionCategoriesService: PositionCategoriesService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService
  ) {}

  @Mutation(() => PositionCategory)
  createPositionCategory(
    @Args('createPositionCategoryInput')
    createPositionCategoryInput: CreatePositionCategoryInput
  ) {
    this.logger.log({
      message: 'Starting to create a position category',
      level: 'info',
    });
    return this.positionCategoriesService.create(createPositionCategoryInput);
  }

  @Query(() => [PositionCategory], { name: 'positionCategories' })
  findAll() {
    this.logger.log({
      message: 'Starting to create a position category',
      level: 'info',
    });
    return this.positionCategoriesService.findAll();
  }

  @Query(() => PositionCategory, { name: 'positionCategory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    this.logger.log({
      message: 'Starting to create a position category',
      level: 'info',
    });
    return this.positionCategoriesService.findOne(id);
  }

  @Mutation(() => PositionCategory)
  updatePositionCategory(
    @Args('updatePositionCategoryInput')
    updatePositionCategoryInput: UpdatePositionCategoryInput
  ) {
    this.logger.log({
      message: 'Starting to create a position category',
      level: 'info',
    });
    return this.positionCategoriesService.update(
      updatePositionCategoryInput.id,
      updatePositionCategoryInput
    );
  }

  @Mutation(() => PositionCategory)
  removePositionCategory(@Args('id', { type: () => Int }) id: number) {
    this.logger.log({
      message: 'Starting to create a position category',
      level: 'info',
    });
    return this.positionCategoriesService.remove(id);
  }
}
