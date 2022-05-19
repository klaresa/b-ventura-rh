import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Contato as ContatoEntity } from '../interfaces/contato.interface';

export type ContatoDocument = ContatoEntity & Document;

@Schema()
export class Contato {
  @Prop({ required: true })
  telefone: string;

  @Prop({ required: true })
  endereco: string;
}

export const ContatoSchema = SchemaFactory.createForClass(Contato);
