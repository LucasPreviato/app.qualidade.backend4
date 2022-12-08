import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsResolver } from './departments.resolver';
import { UnitsService } from 'src/units/units.service';

@Module({
  providers: [DepartmentsResolver, DepartmentsService, UnitsService],
})
export class DepartmentsModule {}
