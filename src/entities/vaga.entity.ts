import { Empresa } from './empresa.entity';
import { Requisitos } from '../interfaces/requisitos.interface';

export class Vaga {
  nome: string
  empresa: Empresa
  status: boolean
  habilidades: Requisitos
}
