import { Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ProvidersResolver } from './providers.resolver';

@Module({
  providers: [ProvidersResolver, ProvidersService],
})
export class ProvidersModule {}
