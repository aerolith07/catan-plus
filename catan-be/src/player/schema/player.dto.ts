import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
class Resources {
  @Field()
  brick: number;
  @Field()
  wood: number;
  @Field()
  sheep: number;
  @Field()
  grain: number;
  @Field()
  rock: number;
}

@ObjectType()
export class PlayerDto {
  @Field(() => ID)
  readonly id?: string;

  @Field()
  readonly name?: string;

  @Field()
  readonly resources?: Resources;
}
