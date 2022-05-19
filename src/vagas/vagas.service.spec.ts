import { Test, TestingModule } from '@nestjs/testing';
import { VagasService } from './vagas.service';
import { CreateVagaDto } from './dto/create-vaga.dto';
import { AppService } from '../app.service';

describe('VagasService', () => {
  let service: VagasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<VagasService>(VagasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should be defined', () => {
    const req: CreateVagaDto = {
      nome: 'string',
      empresa: {
        nome: 'string',
        contato: {
          telefone: 'string',
          endereco: 'string',
        }
      },
      habilidades: {
        requisitos: [
          {"a": "b"},
          {"a": "b"},
        ]
      }
    }
    service.create(req)
    expect(service).toBeDefined();
  });
});
