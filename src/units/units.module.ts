import { Module } from '@nestjs/common';
import { UnitsService } from './units.service';
import { UnitsResolver } from './units.resolver';
import { PrismaUnitsRepository } from './repositories/implementations/prisma.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [UnitsResolver, UnitsService, PrismaUnitsRepository, PrismaModule],
  exports: [UnitsService],
})
export class UnitsModule {}
