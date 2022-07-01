import mongoose from 'mongoose';
import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  Param,
  Delete,
  UseFilters,
  UsePipes,
  UseGuards,
  Put,
  HttpException,
  HttpStatus,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { CandidatosService } from './candidatos.service';
import { UsersService } from '../users/users.service';

import { HttpExceptionFilter } from './http-exception.filter';

import { UpdateCandidatoDto } from './dto/update-candidato.dto';
import { RegisterCandidatoDto } from './dto/register-candidato.dto';

@Controller('candidatos')
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
      userId: newUser._id,
      nome: registerCandidatoDto.nome,
      contato: {
        telefone: registerCandidatoDto.contato.telefone,
        endereco: registerCandidatoDto.contato.endereco
      }
    });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  @UseFilters(new HttpExceptionFilter())
  findAll() {
    try {
      return this.candidatosService.findAll();
    } catch (e) {
      throw new HttpException(e.error, HttpStatus.NOT_FOUND);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  @UseFilters(new HttpExceptionFilter())
  findOne(@Param('id') id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new HttpException(
      'Invalid Id', HttpStatus.NOT_FOUND);
    try {
      return this.candidatosService.findOne(id);
    } catch (e) {
      throw new HttpException(e.error, HttpStatus.NOT_FOUND);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  @UseFilters(new HttpExceptionFilter())
  update(@Request() req, @Param('id') id: string, @Body() updateCandidatoDto: UpdateCandidatoDto) {
    return this.candidatosService.update(id, updateCandidatoDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new HttpException(
      'Invalid Id', HttpStatus.NOT_FOUND);

    try {
      return await this.candidatosService.remove(id);
    } catch (e) {
      throw new HttpException(e.error, HttpStatus.NOT_FOUND);
    }
  }
}
