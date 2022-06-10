import mongoose from 'mongoose';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, UseFilters, HttpException, HttpStatus, ValidationPipe, UsePipes, UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { CandidatosService } from './candidatos.service';
import { UsersService } from '../users/users.service';

import { HttpExceptionFilter } from './http-exception.filter';

import { UpdateCandidatoDto } from './dto/update-candidato.dto';
import { RegisterCandidatoDto } from './dto/register-candidato.dto';

@Controller('candidatos')
@UseGuards(AuthGuard('jwt'))
@UsePipes(new ValidationPipe({ transform: true }))
export class CandidatosController {
  constructor(
    private readonly candidatosService: CandidatosService,
    private readonly usersService: UsersService
  ) {}

  @Post()
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() registerCandidatoDto: RegisterCandidatoDto) {

    const newUser = await this.usersService.create({
      type: registerCandidatoDto.type,
      username: registerCandidatoDto.username,
      password: registerCandidatoDto.password
    });

    console.log('newuser', newUser);

    // retornar o user criado e cadastrar o candidato com o userID
    // na pior das hipoteses usar o username p achar
    return await this.candidatosService.create({
      nome: registerCandidatoDto.nome,
      contato: {
        telefone: registerCandidatoDto.contato.telefone,
        endereco: registerCandidatoDto.contato.endereco
      }
    });
  }

  @Get()
  @UseFilters(new HttpExceptionFilter())
  findAll() {
    try {
      return this.candidatosService.findAll();
    } catch (e) {
      throw new HttpException(e.error, HttpStatus.NOT_FOUND);
    }
  }

  @Get(':id')
  @UseFilters(new HttpExceptionFilter())
  findOne(@Param('id') id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new HttpException(
      'Invalid Id', HttpStatus.NOT_FOUND);
    return this.candidatosService.findOne(id);
  }

  @Patch(':id')
  @UseFilters(new HttpExceptionFilter())
  update(@Param('id') id: string, @Body() updateCandidatoDto: UpdateCandidatoDto) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new HttpException(
      'Invalid Id', HttpStatus.NOT_FOUND);

    if (updateCandidatoDto !instanceof UpdateCandidatoDto) throw new HttpException(
      'Invalid request', HttpStatus.BAD_REQUEST);
    return this.candidatosService.update(id, updateCandidatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new HttpException(
      'Invalid Id', HttpStatus.NOT_FOUND);
    return this.candidatosService.remove(id);
  }
}
