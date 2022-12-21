import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
  collection: 'Home',
})
export class Home extends Document {
  @Prop()
  img: string;
  @Prop()
  title: string;
  @Prop()
  content: string;
}
export const HomeSchema = SchemaFactory.createForClass(Home);
