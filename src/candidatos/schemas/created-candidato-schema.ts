import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Candidato as CandidatoEntity } from '../../entities/candidato.entity';
import { Contato } from '../../schemas/contato.schema';

export type CandidatoDocument = CandidatoEntity & Document;

@Schema()
export class CreatedCandidato {
  @Prop()
  _id: string;

  @Prop({ required: true })
  nome: string;

  @Prop({ type: () => Contato, required: true })
  contato: Contato
}

export const CreatedCandidatoSchema = SchemaFactory.createForClass(CreatedCandidato);
