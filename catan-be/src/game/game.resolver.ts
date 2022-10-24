import { Args, Resolver, Mutation, Query } from '@nestjs/graphql';
import { GameDto } from './dto/game.dto';
import { GameInput } from './dto/game-input.dto';
import { GameService } from './game.service';

@Resolver((of) => GameDto)
export class GameResolver {
  constructor(private gameService: GameService) {}

  @Query((returns) => GameDto)
  async game(@Args('id') id: string) {
    return await this.gameService.findGameById(id);
  }

  @Mutation((returns) => GameDto)
  async createGame(@Args('input') input: GameInput) {
    return this.gameService.createGame(input.title);
  }

  @Mutation((returns) => GameDto)
  async joinGame(@Args('gameId') gameId: string, @Args('playerId') playerId: string) {
    return this.gameService.addPlayer(gameId, playerId);
  }

  @Mutation((returns) => GameDto)
  async leaveGame(@Args('gameId') gameId: string, @Args('playerId') playerId: string) {
    return this.gameService.removePlayer(gameId, playerId);
  }
}
