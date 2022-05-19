import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CandidatosController } from './candidatos.controller';
import { CandidatosService } from './candidatos.service';
import { CandidatosRepository } from './candidatos.repository';
import { Candidato, CandidatoSchema } from './schemas/candidato.schema';

@Module({
  imports : [ MongooseModule.forFeature([{
    name: Candidato.name,
    schema: CandidatoSchema,
    collection: 'candidatos'
  }]),
  ],
  controllers: [CandidatosController],
  providers: [CandidatosService, CandidatosRepository]
})
export class CandidatosModule {}
