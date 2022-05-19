import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Resposta as RespostaEntity } from '../../entities/resposta.entity';
import { Candidato } from '../../candidatos/schemas/candidato.schema';
import { Vaga } from '../../vagas/schemas/vaga.schema';
import { Pontuacao } from '../../schemas/pontuacao.schema';

export type RespostaDocument = RespostaEntity & Document;

@Schema()
export class Resposta {
  @Prop({ type: () => Candidato, required: true })
  candidato: Candidato

  @Prop({ type: () => Vaga, required: true })
  vaga: Vaga

  @Prop({ type: () => Pontuacao, required: true })
  pontuacao: Pontuacao
}

export const RespostaSchema = SchemaFactory.createForClass(Resposta);
