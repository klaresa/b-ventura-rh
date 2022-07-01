import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Candidato as CandidatoEntity } from '../../entities/candidato.entity';
import { Contato } from '../../schemas/contato.schema';

export type CandidatoDocument = CandidatoEntity & Document;

@Schema()
export class Candidato {
  @Prop()
  userId: string

  @Prop({ required: true })
  nome: string;

  @Prop({ type: () => Contato, required: true })
  contato: Contato
}

export const CandidatoSchema = SchemaFactory.createForClass(Candidato);
