import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GameResolver } from './game.resolver';
import { GameService } from './game.service';
import { GameSchema } from './db/game.schema';
import { PlayerModule } from 'src/player/player.module';

@Module({
  imports: [
    PlayerModule,
    MongooseModule.forFeature([
      {
        name: 'Game',
        schema: GameSchema,
      },
    ]),
  ],
  providers: [GameResolver, GameService],
})
export class GameModule {}
