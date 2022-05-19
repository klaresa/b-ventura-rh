import { Module } from '@nestjs/common';
import { VagasService } from './vagas.service';
import { VagasController } from './vagas.controller';
import { VagasRepository } from './vagas.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Vaga, VagaSchema } from './schemas/vaga.schema';

@Module({
  imports : [ MongooseModule.forFeature([{
    name: Vaga.name,
    schema: VagaSchema,
    collection: 'vagas'
  }]),
  ],
  controllers: [VagasController],
  providers: [VagasService, VagasRepository]
})
export class VagasModule {}
