import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ResourceMap } from './resourceMap.model';

@ObjectType()
export class Player {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field((type) => Int, { nullable: true })
  resources?: ResourceMap;
}
