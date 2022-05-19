import { Test, TestingModule } from '@nestjs/testing';
import { CandidatosService } from './candidatos.service';
import { CandidatoSchema, Candidato, CandidatoDocument } from './schemas/candidato.schema';
import { Contato} from '../schemas/contato.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CandidatosController } from './candidatos.controller';
import { CandidatosRepository } from './candidatos.repository';

describe('CandidatosService', () => {
  let service: CandidatosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports : [ MongooseModule.forFeature([{
        name: Candidato.name,
        schema: CandidatoSchema,
        collection: 'candidatos'
      }]),
      ],
      controllers: [CandidatosController],
      providers: [CandidatosService, CandidatosRepository]
    }).compile();

    service = module.get<CandidatosService>(CandidatosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
