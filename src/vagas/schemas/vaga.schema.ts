import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Vaga as VagaEntity } from '../../entities/vaga.entity';
import { Empresa } from '../../empresas/schemas/empresa.schema';
import { Requisitos } from '../../schemas/requisitos.schema';

export type VagaDocument = VagaEntity & Document;

@Schema()
export class Vaga {
  @Prop({ required: true })
  nome: string;

  @Prop({ type: () => Empresa, required: true })
  empresa: Empresa

  @Prop({ required: true })
  status: boolean

  @Prop({ type: () => Requisitos, required: true })
  habilidades: Requisitos

  //@Prop()
  //finalizada: boolean;
}

export const VagaSchema = SchemaFactory.createForClass(Vaga);
