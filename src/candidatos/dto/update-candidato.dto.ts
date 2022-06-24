import { PartialType } from '@nestjs/mapped-types';
import { CreateCandidatoDto } from './create-candidato.dto';

export class UpdateCandidatoDto extends PartialType(CreateCandidatoDto) {
  // type: string;
  // username: string;
  // password: string;
  id: string;
  nome: string
  contato: {
    telefone: string
    endereco: string
  }
}
