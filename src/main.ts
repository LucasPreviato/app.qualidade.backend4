import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston'
import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    })
  )

  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER))
  await app.listen(3333)
}
bootstrap()
