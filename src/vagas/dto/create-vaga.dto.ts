import { Requisitos } from '../../interfaces/requisitos.interface';

export class CreateVagaDto {
  nome: string
  empresa: {
    nome: string
    contato: {
      telefone: string
      endereco: string
    }
  }
  habilidades: Requisitos
}
