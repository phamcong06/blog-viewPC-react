import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';

@Injectable()
export class CrudService<T, X> {
  constructor(protected model: mongoose.Model<T & mongoose.Document>) {}

  async create(input: X): Promise<T> {
    const createdBlog = new this.model(input);
    return createdBlog.save();
  }
  async update(id: string, input: X): Promise<T> {
    return await this.model.findByIdAndUpdate(id, input, { new: true });
  }
  async delete(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
  async findById(id: string): Promise<T[]> {
    return await this.model.findById(id);
  }
  async findAll(): Promise<T[]> {
    return await this.model.find();
  }
}
