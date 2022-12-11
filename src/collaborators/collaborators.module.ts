import { Module } from '@nestjs/common';
import { CollaboratorsService } from './collaborators.service';
import { CollaboratorsResolver } from './collaborators.resolver';
import { UnitsService } from 'src/units/units.service';
import { CollaboratorsRepository } from './repositories/collaborators-repository';
import { PrismaCollaboratorsRepository } from './repositories/prisma/prisma-collaborators-repository';
import { UnitsRepository } from 'src/units/repositories/units-repository';
import { PrismaUnitsRepository } from 'src/units/repositories/prisma/prisma-units-repository';
import { DepartmentsRepository } from 'src/departments/repositories/departments-repository';
import { PrismaDepartmentsRepository } from 'src/departments/repositories/prisma/prisma-departments-repository';

@Module({
  providers: [
    CollaboratorsResolver,
    CollaboratorsService,
    UnitsService,
    {
      provide: CollaboratorsRepository,
      useClass: PrismaCollaboratorsRepository,
    },
    {
      provide: UnitsRepository,
      useClass: PrismaUnitsRepository,
    },
    {
      provide: DepartmentsRepository,
      useClass: PrismaDepartmentsRepository,
    },
  ],
})
export class CollaboratorsModule {}
