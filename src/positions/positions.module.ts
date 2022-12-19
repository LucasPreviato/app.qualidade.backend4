import { Module } from '@nestjs/common';
import { PositionsService } from './positions.service';
import { PositionsResolver } from './positions.resolver';
import { PositionsRepository } from './repositories/position-repository';
import { PrismaPositionRepository } from './repositories/prisma/prisma-position-repository';

@Module({
  providers: [
    PositionsResolver,
    PositionsService,
    {
      provide: PositionsRepository,
      useClass: PrismaPositionRepository,
    },
  ],
})
export class PositionsModule {}
