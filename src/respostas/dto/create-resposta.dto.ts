import { Requisitos } from '../../interfaces/requisitos.interface';
import { Pontuacao } from '../../interfaces/pontuacao.interface';

export class CreateRespostaDto {
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
