import { ArgsType, Field, InputType } from '@nestjs/graphql';

@InputType('PlayerInput')
export class PlayerInput {
  @Field()
  readonly username: string;
}
