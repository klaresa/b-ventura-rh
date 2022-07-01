export class CreateEmpresaDto {
  userId: string
  nome: string
  contato: {
    telefone: string
    endereco: string
  }
}
