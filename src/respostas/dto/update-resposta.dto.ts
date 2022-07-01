import { PartialType } from '@nestjs/mapped-types';
import { CreateRespostaDto } from './create-resposta.dto';
import { Requisitos } from '../../interfaces/requisitos.interface';
import { Pontuacao } from '../../interfaces/pontuacao.interface';

export class UpdateRespostaDto extends PartialType(CreateRespostaDto) {
  candidato: {
    userId: string
    nome: string
    contato: {
      telefone: string
      endereco: string
    }
  }
  vaga: {
    nome: string
    descricao: string
    empresa: {
      userId: string
      nome: string
      contato: {
        telefone: string
        endereco: string
      }
    }
    status: boolean
    habilidades: Requisitos
  }
  pontuacao: Pontuacao
}
