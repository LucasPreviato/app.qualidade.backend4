import { Module } from '@nestjs/common';
import { InitialQualificationsService } from './initial-qualifications.service';
import { InitialQualificationsResolver } from './initial-qualifications.resolver';

@Module({
  providers: [InitialQualificationsResolver, InitialQualificationsService],
})
export class InitialQualificationsModule {}
