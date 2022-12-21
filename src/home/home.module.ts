import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {  HomeSchema } from 'src/schemas/home.scherma';
import { HomeService } from './home.service';
import { HomeResolver } from './home.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Home', schema: HomeSchema }]),
  ],
  providers: [HomeService, HomeResolver],
  // exports:[HomeService]
})
export class HomeModule {}
