import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SubscriptionOutput {
  @Field((type) => String)
  somethingOnTrack: string;
}
