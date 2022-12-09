import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsResolver } from './departments.resolver';
import { UnitsService } from 'src/units/units.service';
import { DepartmentsRepository } from './repositories/departments-repository';
import { PrismaDepartmentsRepository } from './repositories/prisma/prisma-departments-repository';
import { UnitsRepository } from 'src/units/repositories/units-repository';
import { PrismaUnitsRepository } from 'src/units/repositories/prisma/prisma-units-repository';

@Module({
  providers: [
    DepartmentsResolver,
    DepartmentsService,
    UnitsService,
    {
      provide: DepartmentsRepository,
      useClass: PrismaDepartmentsRepository,
    },
    {
      provide: UnitsRepository,
      useClass: PrismaUnitsRepository,
    },
  ],
})
export class DepartmentsModule {}
