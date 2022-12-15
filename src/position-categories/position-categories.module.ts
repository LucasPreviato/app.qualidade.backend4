import { Module } from '@nestjs/common';
import { PositionCategoriesService } from './position-categories.service';
import { PositionCategoriesResolver } from './position-categories.resolver';

@Module({
  providers: [PositionCategoriesResolver, PositionCategoriesService]
})
export class PositionCategoriesModule {}
