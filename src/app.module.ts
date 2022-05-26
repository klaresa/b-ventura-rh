import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidatosModule } from './candidatos/candidatos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EmpresasModule } from './empresas/empresas.module';
import { VagasModule } from './vagas/vagas.module';
import { RespostasModule } from './respostas/respostas.module';
// import { AuthModule } from './auth/auth.module';
// import { UsersModule } from './users/users.module';

import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
      ConfigModule.forRoot(),
      // aqui vai o string de conexao do banco
      MongooseModule.forRoot(process.env.MONGO_STRING),
      // MongooseModule.forFeature([{
      //   name: Candidato.name,
      //   schema: CandidatoSchema,
      //   collection: 'candidatos'
      // }]),
      CandidatosModule,
      EmpresasModule,
      VagasModule,
      RespostasModule,
      // AuthModule,
      // UsersModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
