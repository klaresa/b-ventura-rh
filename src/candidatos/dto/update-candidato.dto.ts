import { PartialType } from '@nestjs/mapped-types';
import { CreateCandidatoDto } from './create-candidato.dto';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class UpdateCandidatoDto extends PartialType(CreateCandidatoDto) {

  @IsNumber()
  nome: string;

  contato: {

    telefone: string

    endereco: string
  };
}
