import { Module } from '@nestjs/common';
import { ProvidersCategoriesService } from './providers-categories.service';
import { ProvidersCategoriesResolver } from './providers-categories.resolver';
import { ProvidersCategoryRepository } from './repositories/providers-categories.repository';
import { PrismaProvidersCategoryRepository } from './repositories/prisma/prisma.providers-categories.repository';

@Module({
  providers: [
    ProvidersCategoriesResolver,
    ProvidersCategoriesService,
    {
      provide: ProvidersCategoryRepository,
      useClass: PrismaProvidersCategoryRepository,
    },
  ],
})
export class ProvidersCategoriesModule {}
