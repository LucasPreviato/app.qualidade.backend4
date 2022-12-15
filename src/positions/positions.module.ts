import { Module } from '@nestjs/common';
import { PositionsService } from './positions.service';
import { PositionsResolver } from './positions.resolver';

@Module({
  providers: [PositionsResolver, PositionsService]
})
export class PositionsModule {}
