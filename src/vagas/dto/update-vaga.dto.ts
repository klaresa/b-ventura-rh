import { PartialType } from '@nestjs/mapped-types';
import { CreateVagaDto } from './create-vaga.dto';
import { Requisitos } from '../../interfaces/requisitos.interface';

export class UpdateVagaDto extends PartialType(CreateVagaDto) {
  nome: string
  empresa: {
    nome: string
    contato: {
      telefone: string
      endereco: string
    }
  }
  status: boolean
  habilidades: Requisitos
}
