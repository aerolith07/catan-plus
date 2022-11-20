import { Args, Resolver, Mutation, Query, Subscription, Parent, ResolveField } from '@nestjs/graphql';
import { GameDto } from './schema/game.dto';
import { GameInput } from './schema/game-input.dto';
import { GameService } from './game.service';
import { PubSub } from 'graphql-subscriptions';
import { SubscriptionOutput } from './schema/subscription.dto';
import { Game } from './db/game.schema';

const pubsub = new PubSub();

const TRIGGER_EVENT = 'GAME_EVENT';

@Resolver((of) => GameDto)
export class GameResolver {
  constructor(private gameService: GameService, private pubsub: PubSub) {}

  @Subscription((returns) => GameDto, {
    resolve: (payload) => payload,
  })
  async gameEvents() {
    return this.pubsub.asyncIterator(TRIGGER_EVENT);
  }

  @Query((returns) => GameDto)
  async game(@Args('id') id: string) {
    const game = await this.gameService.findGameById(id);

    console.log('Publishing something...');
    this.pubsub.publish(TRIGGER_EVENT, game);
    return game;
  }

  @Mutation((returns) => GameDto)
  async createGame(@Args('input') input: GameInput) {
    const game = await this.gameService.createGame(input.title);
    this.pubsub.publish(TRIGGER_EVENT, game);
    return game;
  }

  @Mutation((returns) => GameDto)
  async joinGame(@Args('gameId') gameId: string, @Args('playerId') playerId: string) {
    return this.gameService.addPlayer(gameId, playerId);
  }

  @Mutation((returns) => GameDto)
  async leaveGame(@Args('gameId') gameId: string, @Args('playerId') playerId: string) {
    return this.gameService.removePlayer(gameId, playerId);
  }

  @ResolveField()
  async players(@Parent() game: Game) {
    const { players } = game;
    console.log(game);
    return this.gameService.getAllPlayers(players);
  }
}
