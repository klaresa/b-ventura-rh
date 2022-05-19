import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from "mongoose";
import { Resposta, RespostaDocument } from './schemas/resposta.schema';
// import { Resposta } from '../entities/resposta.entity';

@Injectable()
export class RespostasRepository {

  constructor(@InjectModel(Resposta.name) private model: Model<RespostaDocument>) {}

  async create(resposta: Resposta): Promise<Resposta>{
    return new this.model(resposta).save();
  }

  async findAll(): Promise<Resposta[]> {
    return this.model.find().exec();
  }

  async findOne(filterQuery: FilterQuery<Resposta>): Promise<Resposta> {
    return this.model.findOne({ _id: filterQuery });
  }

  async update(filterQuery: FilterQuery<Resposta>, resposta: Partial<Resposta>): Promise<Resposta> {
    return this.model.findOneAndReplace(filterQuery, resposta,{ new: true } );
  }

  async remove(filterQuery: FilterQuery<Resposta>) {
    return this.model.findOneAndRemove(filterQuery);
  }
}
