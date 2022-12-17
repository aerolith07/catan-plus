import { Args, Resolver, Mutation, Query, Subscription, Parent, ResolveField } from '@nestjs/graphql';
import { GameDto } from './schema/game.dto';
import { GameInput } from './schema/game-input.dto';
import { GameService } from './game.service';
import { PubSub } from 'graphql-subscriptions';
import { Game } from './db/game.schema';
import { Logger } from '@nestjs/common';

const pubsub = new PubSub();

const TRIGGER_EVENT = 'GAME_EVENT_';

@Resolver((of) => GameDto)
export class GameResolver {
  private readonly logger = new Logger(GameResolver.name);

  constructor(private gameService: GameService, private pubsub: PubSub) {}

  @Subscription((returns) => GameDto, {
    resolve: (payload) => payload,
    filter(payload, variables, context) {
      if (payload._id.toString() === variables.gameId) {
        this.logger.log(`Sending event for gameId: ${variables.gameId}`);
        return true;
      }
      return false;
    },
  })
  async gameEvents(@Args('gameId') gameId: string) {
    return this.pubsub.asyncIterator(TRIGGER_EVENT);
  }

  @Query((returns) => GameDto)
  async game(@Args('id') id: string) {
    const game = await this.gameService.findGameById(id);
    this.pubsub.publish(TRIGGER_EVENT + game.id, game);
    return game;
  }

  @Mutation((returns) => GameDto)
  async createGame(@Args('input') input: GameInput) {
    return await this.gameService.createGame(input.title);
  }

  @Mutation((returns) => GameDto)
  async joinGame(@Args('gameId') gameId: string, @Args('playerId') playerId: string) {
    const game = await this.gameService.addPlayer(gameId, playerId);
    this.pubsub.publish(TRIGGER_EVENT, game);
    console.log('Game joined');
    return game;
  }

  @Mutation((returns) => GameDto)
  async leaveGame(@Args('gameId') gameId: string, @Args('playerId') playerId: string) {
    return this.gameService.removePlayer(gameId, playerId);
  }

  @ResolveField()
  async players(@Parent() game: Game) {
    const { players } = game;
    return this.gameService.getAllPlayers(players);
  }
}
