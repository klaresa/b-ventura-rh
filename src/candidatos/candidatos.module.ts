import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CandidatosController } from './candidatos.controller';
import { CandidatosService } from './candidatos.service';
import { CandidatosRepository } from './candidatos.repository';
import { Candidato, CandidatoSchema } from './schemas/candidato.schema';
import { UsersService } from '../users/users.service';
import { UsersModule } from '../users/users.module';
import { UsersRepository } from '../users/users.repository';

@Module({
  imports : [
    MongooseModule.forFeature([{
    name: Candidato.name,
    schema: CandidatoSchema,
    collection: 'candidatos'
  }]),
    UsersModule,
  ],
  controllers: [CandidatosController],
  providers: [
    // UsersModule, UsersService, UsersRepository,
    CandidatosService, CandidatosRepository,
  ],
})
export class CandidatosModule {}
