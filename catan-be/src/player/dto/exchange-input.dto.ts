import { ArgsType, Field, InputType } from '@nestjs/graphql';

@InputType('ExchangeInput')
export class ExchangeInput {
  @Field()
  readonly fromId: string;

  @Field()
  readonly toId: string;

  @Field()
  readonly resource: string;

  @Field()
  readonly amount: number;
}
