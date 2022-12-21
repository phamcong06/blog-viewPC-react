import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Home } from 'src/schemas/home.scherma';
import { CrudResolver } from 'src/shared/resolver/crud.resolver';
import { HomeType } from './home.DTO';
import { HomeInput } from './home.input';
import { HomeService } from './home.service';

@Resolver()
export class HomeResolver extends CrudResolver<
  HomeType,
  HomeInput,
  Home,
  HomeService
>('Home', HomeType, HomeInput) {
  constructor(private service: HomeService) {
    super();
  }

}
