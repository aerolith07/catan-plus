import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GameModule } from './game/game.module';
import { PlayerModule } from './player/player.module';

@Module({
  imports: [
    GameModule,
    PlayerModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
      installSubscriptionHandlers: true,
      subscriptions: {
        'graphql-ws': true,
        'subscriptions-transport-ws': true,
      },
    }),
    MongooseModule.forRoot('mongodb://localhost:27017'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
