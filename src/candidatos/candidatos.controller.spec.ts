import { Test, TestingModule } from '@nestjs/testing';
import { CandidatosController } from './candidatos.controller';
import { CandidatosService } from './candidatos.service';
import { CandidatosRepository } from './candidatos.repository';
import { Candidato, CandidatoSchema } from './schemas/candidato.schema';
import { MongooseModule } from '@nestjs/mongoose';

describe('CandidatosController', () => {
  let controller: CandidatosController;
  let service: CandidatosService;
  let repository: CandidatosRepository;

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
    repository = module.get<CandidatosRepository>(CandidatosRepository);
    controller = module.get<CandidatosController>(CandidatosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
