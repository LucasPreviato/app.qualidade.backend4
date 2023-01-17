import { Module } from '@nestjs/common';
import { ProvidersCategoriesService } from './providers-categories.service';
import { ProvidersCategoriesResolver } from './providers-categories.resolver';
import { PrismaProvidersCategoriesRepository } from './repositories/prisma/prisma-providers-categories-repository';
import { ProvidersCategoriesRepository } from './repositories/providers-categories-repository';

@Module({
  providers: [
    ProvidersCategoriesResolver,
    ProvidersCategoriesService,
    {
      provide: ProvidersCategoriesRepository,
      useClass: PrismaProvidersCategoriesRepository,
    },
  ],
})
export class ProvidersCategoriesModule {}
