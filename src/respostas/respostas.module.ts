import { Module } from '@nestjs/common';
import { RespostasService } from './respostas.service';
import { RespostasController } from './respostas.controller';
import { RespostasRepository } from './respostas.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Resposta, RespostaSchema } from './schemas/resposta.schema';

@Module({
  imports : [ MongooseModule.forFeature([{
    name: Resposta.name,
    schema: RespostaSchema,
    collection: 'respostas'
  }]),
  ],
  controllers: [RespostasController],
  providers: [RespostasService, RespostasRepository]
})
export class RespostasModule {}
