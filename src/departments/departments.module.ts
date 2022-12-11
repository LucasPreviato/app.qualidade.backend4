import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsResolver } from './departments.resolver';
import { DepartmentsRepository } from './repositories/departments-repository';
import { PrismaDepartmentsRepository } from './repositories/prisma/prisma-departments-repository';

@Module({
  providers: [
    DepartmentsResolver,
    DepartmentsService,
    {
      provide: DepartmentsRepository,
      useClass: PrismaDepartmentsRepository,
    },
  ],
})
export class DepartmentsModule {}
