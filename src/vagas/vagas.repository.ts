import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from "mongoose";
import { Vaga, VagaDocument } from './schemas/vaga.schema';
// import { Vaga } from '../entities/vaga.entity';

@Injectable()
export class VagasRepository {

  constructor(@InjectModel(Vaga.name) private model: Model<VagaDocument>) {}

  async create(vaga: Vaga): Promise<Vaga>{
    return new this.model(vaga).save();
  }

  async findAll(): Promise<Vaga[]> {
    return this.model.find().exec();
  }

  async findOne(filterQuery: FilterQuery<Vaga>): Promise<Vaga> {
    return this.model.findOne({ _id: filterQuery } );
  }

  async update(filterQuery: FilterQuery<Vaga>, vaga: Partial<Vaga>): Promise<Vaga> {
    return this.model.findOneAndReplace(filterQuery, vaga,{ new: true } );
  }

  async remove(filterQuery: FilterQuery<Vaga>) {
    return this.model.findOneAndRemove(filterQuery);
  }
}
