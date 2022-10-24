import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ResourceInput } from './schema/collect-input.dto';
import { ExchangeInput } from './schema/exchange-input.dto';
import { PlayerInput } from './schema/player-input.dto';
import { PlayerDto } from './schema/player.dto';
import { PlayerService } from './player.service';

@Resolver((returns) => PlayerDto)
export class PlayerResolver {
  constructor(private playerService: PlayerService) {}

  @Query((returns) => PlayerDto)
  async player(@Args('id') id: string) {
    return await this.playerService.getPlayer(id);
  }

  @Mutation((returns) => PlayerDto)
  async createPlayer(@Args('input') input: PlayerInput) {
    return await this.playerService.create(input);
  }

  @Mutation((returns) => PlayerDto)
  async collect(@Args('input') transaction: ResourceInput) {
    return await this.playerService.collect(transaction);
  }

  @Mutation((returns) => [PlayerDto])
  async exchange(@Args('input') exchange: ExchangeInput) {
    // TODO move this into the resolver?
    const fromPlayer = await this.playerService.collect({
      id: exchange.fromId,
      amount: exchange.amount * -1,
      resource: exchange.resource,
    });
    const toPlayer = await this.playerService.collect({
      id: exchange.toId,
      amount: exchange.amount,
      resource: exchange.resource,
    });
    return [fromPlayer, toPlayer];
  }
}
