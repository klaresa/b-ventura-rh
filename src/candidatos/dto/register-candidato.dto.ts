export class RegisterCandidatoDto {
  type: string;
  username: string;
  password: string;

  nome: string
  contato: {
    telefone: string
    endereco: string
  }
}
