import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Pontuacao as PontuacaoEntity } from '../interfaces/pontuacao.interface';

export type PontuacaoDocument = PontuacaoEntity & Document;

@Schema()
export class Pontuacao {
  @Prop({ required: true })
  pontuacao: Array<object>;
}

export const PontuacaoSchema = SchemaFactory.createForClass(Pontuacao);
