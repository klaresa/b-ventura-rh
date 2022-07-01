import { Injectable } from '@nestjs/common';
import { CandidatosRepository } from './candidatos.repository';
import { Candidato } from './schemas/candidato.schema';
import { CreateCandidatoDto } from './dto/create-candidato.dto';
import { UpdateCandidatoDto } from './dto/update-candidato.dto';

@Injectable()
export class CandidatosService {
  constructor(
    private readonly candidatosRepository: CandidatosRepository,
    // private readonly usersService: UsersService
  ) {}

  // salvar o usuario no banco e com o id criado retorna o userId vinculado ao candidato

  async create(createCandidatoDto: CreateCandidatoDto): Promise<Candidato> {
    return this.candidatosRepository.create({
      userId: createCandidatoDto.userId,
      nome: createCandidatoDto.nome,
      contato: createCandidatoDto.contato
    });
  }

  async findAll(): Promise<Candidato[]> {
    return await this.candidatosRepository.findAll();
  }

  async findOne(id: string): Promise<Candidato> {
    return await this.candidatosRepository.findOne({ _id: id });
  }

  async update(id: string, updateCandidatoDto: UpdateCandidatoDto): Promise<Candidato> {
    if (id === updateCandidatoDto.id) {
      try {
        const user = await this.findOne(id);
        if (user) return await this.candidatosRepository.update({ id }, updateCandidatoDto);
      } catch (e) {
        throw new Error('you have no authorization');
      }
    }
  }

  async remove(id: string) {
    return await this.candidatosRepository.remove({ id });
  }
}
