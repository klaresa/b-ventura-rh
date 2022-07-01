import { Injectable } from '@nestjs/common';
import { EmpresasRepository } from './empresas.repository';
import { Empresa } from './schemas/empresa.schema';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { CreateEmpresaDto } from './dto/create-empresa.dto';

@Injectable()
export class EmpresasService {
  constructor(private readonly empresasRepository: EmpresasRepository) {}

  async create(createEmpresaDto: CreateEmpresaDto): Promise<Empresa> {
    return this.empresasRepository.create({
      userId: createEmpresaDto.userId,
      nome: createEmpresaDto.nome,
      contato: createEmpresaDto.contato
    });
  }

  findAll(): Promise<Empresa[]> {
    return this.empresasRepository.findAll();
  }

  async findOne(id: string): Promise<Empresa> {
    return await this.empresasRepository.findOne({ _id: id });
  }

  async findByUserId(userId: string): Promise<Empresa> {
    return await this.empresasRepository.findByUserId({ userId: userId });
  }

  update(id: string, updateEmpresaDto: UpdateEmpresaDto): Promise<Empresa> {
    return this.empresasRepository.update({ id }, updateEmpresaDto);
  }

  remove(id: string) {
    return this.empresasRepository.remove({ id });
  }
}
