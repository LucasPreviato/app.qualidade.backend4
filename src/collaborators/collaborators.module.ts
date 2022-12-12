import { Module } from '@nestjs/common';
import { CollaboratorsService } from './collaborators.service';
import { CollaboratorsResolver } from './collaborators.resolver';
import { UnitsService } from 'src/units/units.service';
import { CollaboratorsRepository } from './repositories/collaborators-repository';
import { PrismaCollaboratorsRepository } from './repositories/prisma/prisma-collaborators-repository';
import { UnitsRepository } from 'src/units/repositories/units-repository';
import { PrismaUnitsRepository } from 'src/units/repositories/prisma/prisma-units-repository';

@Module({
  providers: [
    CollaboratorsResolver,
    CollaboratorsService,
    {
      provide: CollaboratorsRepository,
      useClass: PrismaCollaboratorsRepository,
    },
    UnitsService,
    {
      provide: UnitsRepository,
      useClass: PrismaUnitsRepository,
    },
  ],
})
export class CollaboratorsModule {}
