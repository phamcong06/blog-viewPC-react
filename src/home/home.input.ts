import { Field, InputType } from '@nestjs/graphql';
import { Home } from 'src/schemas/home.scherma';

@InputType()
export class HomeInput {
  @Field(() => String, { nullable: true })
  readonly img: Home['img'];
  @Field(() => String)
  readonly title: Home['title'];
  @Field(() => String)
  readonly content: Home['content'];

}
