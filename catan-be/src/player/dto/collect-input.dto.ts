import { ArgsType, Field, InputType } from '@nestjs/graphql';

@InputType('ResourceInput')
export class ResourceInput {
  @Field()
  readonly id: string;

  @Field()
  readonly resource: string;

  @Field()
  readonly amount: number;
}
