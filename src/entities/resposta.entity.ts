import { Candidato } from './candidato.entity';
import { Vaga } from './vaga.entity';
import { Pontuacao } from '../interfaces/pontuacao.interface';

export class Resposta {
  candidato: Candidato
  vaga: Vaga
  pontuacao: Pontuacao
}
