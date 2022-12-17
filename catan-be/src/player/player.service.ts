import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { Player } from './db/player.schema';
import { ResourceInput } from './schema/collect-input.dto';
import { PlayerInput } from './schema/player-input.dto';

@Injectable()
export class PlayerService {
  constructor(@InjectModel('Player') private readonly playerModel: Model<Player>) {}

  async playerExists(id: string) {
    return await this.playerModel.findById(id);
  }

  async getPlayer(id: string) {
    return await this.playerModel.findById(id);
  }

  async collect(transaction: ResourceInput) {
    const player = await this.playerModel.findOneAndUpdate(
      { _id: transaction.id },
      {
        $inc: { [`resources.${transaction.resource}`]: transaction.amount },
      },
    );
    return this.getPlayer(transaction.id);
  }

  async create(input: PlayerInput) {
    const result = await new this.playerModel({ name: input.username, resources: {} }).save();
    return result;
  }

  async findManyPlayers(playerIds: string[]) {
    const result = await this.playerModel.find({
      _id: {
        $in: playerIds.map((playerId) => {
          return new ObjectId(playerId);
        }),
      },
    });

    return result;
  }
}
