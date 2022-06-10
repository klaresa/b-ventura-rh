import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmpresasController } from './empresas.controller';
import { EmpresasService } from './empresas.service';
import { EmpresasRepository } from './empresas.repository';
import { Empresa, EmpresaSchema } from './schemas/empresa.schema';
import { UsersModule } from '../users/users.module';

@Module({
  imports : [ MongooseModule.forFeature([{
    name: Empresa.name,
    schema: EmpresaSchema,
    collection: 'empresas'
  }]),
    UsersModule,
  ],
  controllers: [EmpresasController],
  providers: [EmpresasService, EmpresasRepository]
})
export class EmpresasModule {}
