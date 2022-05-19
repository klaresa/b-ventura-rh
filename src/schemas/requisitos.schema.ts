import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Requisitos as RequisitosEntity } from '../interfaces/requisitos.interface';

export type RequisitosDocument = RequisitosEntity & Document;

@Schema()
export class Requisitos {
  @Prop({ required: true })
  requisitos: Array<object>;
}

export const RequisitosSchema = SchemaFactory.createForClass(Requisitos);
