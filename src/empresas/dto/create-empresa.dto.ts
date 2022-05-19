export class CreateEmpresaDto {
  nome: string
  contato: {
    telefone: string
    endereco: string
  }
}
