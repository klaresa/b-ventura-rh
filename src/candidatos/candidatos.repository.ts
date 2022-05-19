import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from "mongoose";
import { Candidato, CandidatoDocument } from './schemas/candidato.schema';

@Injectable()
export class CandidatosRepository {

  constructor(@InjectModel(Candidato.name) private model: Model<CandidatoDocument>) {}

  async create(candidato: Candidato): Promise<Candidato>{
    return new this.model(candidato).save();
  }

  async findAll(): Promise<Candidato[]> {
    return this.model.find().exec();
  }

  async findOne(filterQuery: FilterQuery<Candidato>): Promise<Candidato> {
    return this.model.findOne({ _id: filterQuery });
  }

  async update(filterQuery: FilterQuery<Candidato>, candidato: Partial<Candidato>): Promise<Candidato> {
    return this.model.findOneAndReplace(filterQuery, candidato,{ new: true } );
  }

  async remove(filterQuery: FilterQuery<Candidato>) {
    return this.model.findOneAndRemove(filterQuery);
  }

}
