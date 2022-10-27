import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnitsModule } from './units/units.module';

@Module({
  imports: [UnitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
