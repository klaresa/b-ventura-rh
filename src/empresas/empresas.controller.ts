import mongoose from "mongoose";
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  UseFilters, UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UsersService } from '../users/users.service';
import { EmpresasService } from './empresas.service';

import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { RegisterEmpresaDto } from './dto/register-empresa.dto';

import { HttpExceptionFilter } from '../candidatos/http-exception.filter';

@Controller('empresas')
@UseGuards(AuthGuard('jwt'))
export class EmpresasController {
  constructor(
    private readonly empresasService: EmpresasService,
    private readonly usersService: UsersService
  ) {}

  @Post()
  async create(@Body() registerEmpresaDto: RegisterEmpresaDto) {

    // separar o email e senha para a criacao do user c/ userService
    const newUser = await this.usersService.create({
      type: registerEmpresaDto.type,
      username: registerEmpresaDto.username,
      password: registerEmpresaDto.password
    });

    console.log('newuser', newUser);

    // retornar o user criado e cadastrar o candidato com o userID
    // na pior das hipoteses usar o username p achar
    return await this.empresasService.create({
      nome: registerEmpresaDto.nome,
      contato: {
        telefone: registerEmpresaDto.contato.telefone,
        endereco: registerEmpresaDto.contato.endereco
      }
    });
  }

  @Get()
  findAll() {
    return this.empresasService.findAll();
  }

  @Get(':id')
  @UseFilters(new HttpExceptionFilter())
  findOne(@Param('id') id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new HttpException('Invalid Id', HttpStatus.NOT_FOUND);
    return this.empresasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpresaDto: UpdateEmpresaDto) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new HttpException('Invalid Id', HttpStatus.NOT_FOUND);
    return this.empresasService.update(id, updateEmpresaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new HttpException('Invalid Id', HttpStatus.NOT_FOUND);
    return this.empresasService.remove(id);
  }
}
