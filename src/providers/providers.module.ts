import { Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ProvidersResolver } from './providers.resolver';
import { ProvidersRepository } from './repositories/providers.repository';
import { PrismaProvidersRepository } from './repositories/prisma/prisma.providers.repository';

@Module({
  providers: [
    ProvidersResolver,
    ProvidersService,
    {
      provide: ProvidersRepository,
      useClass: PrismaProvidersRepository,
    },
  ],
})
export class ProvidersModule {}
