import { ObjectType, Field, ID } from '@nestjs/graphql';
import { PlayerDto } from 'src/player/schema/player.dto';
import { Player, PlayerSchema } from 'src/player/db/player.schema';

@ObjectType()
export class GameDto {
  @Field(() => ID)
  readonly id?: string;

  @Field()
  readonly title?: string;

  @Field()
  readonly description?: string;

  @Field(() => [PlayerDto])
  players: PlayerDto[];
}
