import { Injectable } from '@nestjs/common';
import { CreateVagaDto } from './dto/create-vaga.dto';
import { UpdateVagaDto } from './dto/update-vaga.dto';
import { Vaga } from './schemas/vaga.schema';
import { VagasRepository } from './vagas.repository';

@Injectable()
export class VagasService {
  constructor(private readonly vagasRepository: VagasRepository) {}

  async create(createVagaDto: CreateVagaDto): Promise<Vaga> {
    return this.vagasRepository.create({
      nome: createVagaDto.nome,
      empresa: createVagaDto.empresa,
      status: createVagaDto.status,
      habilidades: createVagaDto.habilidades
    });
  }
  findAll(): Promise<Vaga[]> {
    return this.vagasRepository.findAll();
  }

  findOne(id: string): Promise<Vaga> {
    return this.vagasRepository.findOne({ _id: id });
  }

  update(id: string, updateVagaDto: UpdateVagaDto): Promise<Vaga> {
    return this.vagasRepository.update({ id }, updateVagaDto);
  }

  remove(id: string) {
    return this.vagasRepository.remove({ id });
  }
}
