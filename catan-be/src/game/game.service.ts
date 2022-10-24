import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player } from 'src/player/db/player.schema';
import { PlayerService } from 'src/player/player.service';
import { PlayerDto } from 'src/player/schema/player.dto';
import { Game } from './db/game.schema';

@Injectable()
export class GameService {
  constructor(
    @InjectModel('Game') private readonly gameModel: Model<Game>,
    private readonly playerService: PlayerService,
  ) {}

  async getAllPlayers(players: string[]) {
    return await this.playerService.findManyPlayers(players);
  }

  async findGameById(id: string) {
    return await this.gameModel.findById(id);
  }

  async addPlayer(gameId: string, playerId: string) {
    console.info(`Adding player:${playerId} to game:${gameId}`);
    const playerExists = await this.playerService.playerExists(playerId);
    if (playerExists) {
      await this.gameModel.updateOne({ _id: gameId }, { $addToSet: { players: playerId } });
    }

    return await this.findGameById(gameId);
  }

  async removePlayer(gameId: string, playerId: string) {
    console.info(`Removing player:${playerId} to game:${gameId}`);
    await this.gameModel.updateOne({ _id: gameId }, { $pull: { players: playerId } });
    return await this.findGameById(gameId);
  }

  async createGame(title: string) {
    return await new this.gameModel({
      description: 'This is the description of every game',
      title,
      price: 20,
    }).save();
  }
}
