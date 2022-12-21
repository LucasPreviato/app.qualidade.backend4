import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import { join } from 'path'
import { AppService } from './app.service'
import { PrismaModule } from './prisma/prisma.module'
import { AppController } from './app.controller'
import { DepartmentsModule } from './departments/departments.module'
import { UnitsModule } from './units/units.module'
import { CollaboratorsModule } from './collaborators/collaborators.module'
import { PositionCategoriesModule } from './position-categories/position-categories.module'
import { PositionsModule } from './positions/positions.module'
import { DocumentsModule } from './documents/documents.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
      sortSchema: true,
    }),
    PrismaModule,
    DepartmentsModule,
    UnitsModule,
    CollaboratorsModule,
    PositionCategoriesModule,
    PositionsModule,
    DocumentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
