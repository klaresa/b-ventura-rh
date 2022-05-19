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
      nome: createEmpresaDto.nome,
      contato: createEmpresaDto.contato
    });
  }

  findAll(): Promise<Empresa[]> {
    return this.empresasRepository.findAll();
  }

  findOne(id: string): Promise<Empresa> {
    return this.empresasRepository.findOne({ _id: id });
  }

  update(id: string, updateEmpresaDto: UpdateEmpresaDto): Promise<Empresa> {
    return this.empresasRepository.update({ id }, updateEmpresaDto);
  }

  remove(id: string) {
    return this.empresasRepository.remove({ id });
  }
}
