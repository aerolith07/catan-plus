import { ArgsType, Field, InputType } from '@nestjs/graphql';

@ArgsType()
@InputType('GameInput')
export class GameInput {
  @Field()
  readonly title?: string;
}
