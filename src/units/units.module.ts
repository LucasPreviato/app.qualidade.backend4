import { Module } from '@nestjs/common';
import { UnitsService } from './units.service';
import { UnitsResolver } from './units.resolver';
import { UnitsRepository } from './repositories/units-repository';
import { PrismaUnitsRepository } from './repositories/prisma/prisma-units-repository';

@Module({
  providers: [
    UnitsResolver,
    UnitsService,
    {
      provide: UnitsRepository,
      useClass: PrismaUnitsRepository,
    },
  ],
})
export class UnitsModule {}
