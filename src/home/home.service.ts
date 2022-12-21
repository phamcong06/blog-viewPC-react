import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Home } from 'src/schemas/home.scherma';
import { CrudService } from 'src/shared/service/crud/crud.service';
import { HomeInput } from './home.input';
import { Model } from 'mongoose';
@Injectable()
export class HomeService extends CrudService<Home, HomeInput> {
  constructor(
    @InjectModel('Home')
    model: Model<Home & Document>,
  ) {
    super(model);
  }
}
