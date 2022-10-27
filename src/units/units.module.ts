import { Module } from '@nestjs/common';
import { UnitsService } from './units.service';
import { UnitsResolver } from './units.resolver';

@Module({
  providers: [UnitsResolver, UnitsService]
})
export class UnitsModule {}
