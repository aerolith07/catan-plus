import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PlayerInput } from './dto/player-input.dto';
import { Player } from './db/player.schema';
import { ResourceInput } from './dto/collect-input.dto';

@Injectable()
export class PlayerService {
  constructor(@InjectModel('Player') private readonly playerModel: Model<Player>) {}

  async playerExists(id: string) {
    console.log('hello');

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
    console.log(player);
    return this.getPlayer(transaction.id);
  }

  async create(input: PlayerInput) {
    const result = await new this.playerModel({ name: input.username }).save();
    return result;
  }
}
