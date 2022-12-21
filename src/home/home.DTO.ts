import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Home } from 'src/schemas/home.scherma';

@ObjectType()
export class HomeType {
  @Field(() => ID)
  readonly id?: string;
  @Field(() => String)
  img?:string;
  @Field(() => String)
  readonly title: string;
  @Field(() => String)
  readonly content: string;
}
