import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { join } from 'path';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { DepartmentsModule } from './departments/departments.module';
import { UnitsModule } from './units/units.module';
import { CollaboratorsModule } from './collaborators/collaborators.module';
import { PositionCategoriesModule } from './position-categories/position-categories.module';
import { PositionsModule } from './positions/positions.module';
import { DocumentsModule } from './documents/documents.module';
import { DocumentsCategoriesModule } from './documents-categories/documents-categories.module';
import { S3Module } from 'nestjs-s3';
import { UploadsModule } from './uploads/uploads.module';
import { ProvidersModule } from './providers_resources/providers/providers.module';
import { ProvidersCategoriesModule } from './providers_resources/providers-categories/providers-categories.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
      sortSchema: true,
      cors: {
        origin: '*',
        credentials: true,
      },
    }),
    S3Module.forRoot({
      config: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
        endpoint: process.env.AWS_ENDPOINT,
        s3ForcePathStyle: true,
        signatureVersion: 'v4',
      }, // your aws s3 configuration
    }),
    WinstonModule.forRoot({
      level: 'http',
      format: winston.format.json(),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
      ],
    }),
    PrismaModule,
    DepartmentsModule,
    UnitsModule,
    CollaboratorsModule,
    PositionCategoriesModule,
    PositionsModule,
    DocumentsModule,
    DocumentsCategoriesModule,
    UploadsModule,
    ProvidersModule,
    ProvidersCategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
