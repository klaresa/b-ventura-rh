import { Requisitos } from '../../interfaces/requisitos.interface';
import { Pontuacao } from '../../interfaces/pontuacao.interface';

export class CreateRespostaDto {
  candidato: {
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
