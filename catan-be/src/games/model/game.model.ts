import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Player } from './player.model';

@ObjectType()
export class Game {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field((type) => [Player])
  players: Player[];
}
