import { Module } from '@nestjs/common';
import { PositionCategoriesService } from './position-categories.service';
import { PositionCategoriesResolver } from './position-categories.resolver';
import { PositionCategoriesRepository } from './repositories/position-categories-repository';
import { PrismaPositionCategoriesRepository } from './repositories/prisma/prisma-position-categories-repository';

@Module({
  providers: [
    PositionCategoriesResolver,
    PositionCategoriesService,
    {
      provide: PositionCategoriesRepository,
      useClass: PrismaPositionCategoriesRepository,
    },
  ],
})
export class PositionCategoriesModule {}
