import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from "mongoose";
import { Empresa, EmpresaDocument } from './schemas/empresa.schema';

@Injectable()
export class EmpresasRepository {

  constructor(@InjectModel(Empresa.name) private model: Model<EmpresaDocument>) {}

  async create(empresa: Empresa): Promise<Empresa>{
    return new this.model(empresa).save();
  }

  async findAll(): Promise<Empresa[]> {
    return this.model.find().exec();
  }

  async findOne(filterQuery: FilterQuery<Empresa>): Promise<Empresa> {
    return this.model.findOne({ _id: filterQuery });
  }

  async findByUserId(filterQuery: FilterQuery<Empresa>): Promise<Empresa> {
    return this.model.findOne({ filterQuery });
  }

  async update(filterQuery: FilterQuery<Empresa>, empresa: Partial<Empresa>): Promise<Empresa> {
    return this.model.findOneAndReplace(filterQuery, empresa,{ new: true } );
  }

  async remove(filterQuery: FilterQuery<Empresa>) {
    return this.model.findOneAndRemove(filterQuery);
  }
}
