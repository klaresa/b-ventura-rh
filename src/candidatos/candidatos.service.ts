import { Injectable } from '@nestjs/common';
import { CandidatosRepository } from './candidatos.repository';
import { Candidato } from './schemas/candidato.schema';
import { CreateCandidatoDto } from './dto/create-candidato.dto';
import { UpdateCandidatoDto } from './dto/update-candidato.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class CandidatosService {
  constructor(
    private readonly candidatosRepository: CandidatosRepository,
    // private readonly usersService: UsersService
  ) {}

  // salvar o usuario no banco e com o id criado retorna o userId vinculado ao candidato

  async create(createCandidatoDto: CreateCandidatoDto): Promise<Candidato> {

    return this.candidatosRepository.create({
      nome: createCandidatoDto.nome,
      contato: createCandidatoDto.contato
    });
  }

  findAll(): Promise<Candidato[]> {
    return this.candidatosRepository.findAll();
  }

  findOne(id: string): Promise<Candidato> {
    return this.candidatosRepository.findOne({ _id: id });
  }

  update(id: string, updateCandidatoDto: UpdateCandidatoDto): Promise<Candidato> {
    return this.candidatosRepository.update({ id }, updateCandidatoDto);
  }

  remove(id: string) {
    return this.candidatosRepository.remove({ id });
  }
}
