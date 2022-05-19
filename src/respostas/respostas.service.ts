import { Injectable } from '@nestjs/common';
import { RespostasRepository } from './respostas.repository';
import { CreateRespostaDto } from './dto/create-resposta.dto';
import { Resposta } from './schemas/resposta.schema';
import { UpdateRespostaDto } from './dto/update-resposta.dto';

@Injectable()
export class RespostasService {
  constructor(private readonly respostaRepository: RespostasRepository) {}

  async create(createRespostaDto: CreateRespostaDto): Promise<Resposta> {
    return this.respostaRepository.create({
      candidato: createRespostaDto.candidato,
      vaga: createRespostaDto.vaga,
      pontuacao: createRespostaDto.pontuacao
    });
  }
  findAll(): Promise<Resposta[]> {
    return this.respostaRepository.findAll();
  }

  findOne(id: string): Promise<Resposta> {
    return this.respostaRepository.findOne({ _id: id });
  }

  update(id: string, updateRespostaDto: UpdateRespostaDto): Promise<Resposta> {
    return this.respostaRepository.update({ id }, updateRespostaDto);
  }

  remove(id: string) {
    return this.respostaRepository.remove({ id });
  }
}
