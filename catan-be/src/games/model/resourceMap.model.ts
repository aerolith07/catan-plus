import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ResourceMap {
  @Field((type) => Int)
  brick: number;

  @Field((type) => Int)
  wood: number;

  @Field((type) => Int)
  sheep: number;

  @Field((type) => Int)
  grain: number;

  @Field((type) => Int)
  rock: number;
}
