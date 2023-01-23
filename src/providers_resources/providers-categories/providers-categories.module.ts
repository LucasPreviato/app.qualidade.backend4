import { Module } from '@nestjs/common';
import { ProvidersCategoriesService } from './providers-categories.service';
import { ProvidersCategoriesResolver } from './providers-categories.resolver';

@Module({
  providers: [ProvidersCategoriesResolver, ProvidersCategoriesService],
})
export class ProvidersCategoriesModule {}
