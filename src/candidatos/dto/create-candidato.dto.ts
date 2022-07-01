export class CreateCandidatoDto {
  userId: string
  nome: string
  contato: {
    telefone: string
    endereco: string
  }
}
