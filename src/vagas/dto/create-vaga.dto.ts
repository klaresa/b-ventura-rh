import { Requisitos } from '../../interfaces/requisitos.interface';

export class CreateVagaDto {
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
