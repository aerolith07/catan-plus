import { Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GamesService } from './games.service';
import { Game } from './model/game.model';

@Resolver((of) => Game)
export class GamesResolver {
  constructor(private gamesService: GamesService) {}

  @Query((returns) => Game)
  async author(@Args('id', { type: () => Int }) id: number) {
    return this.gamesService.findOneById(id);
  }
}
