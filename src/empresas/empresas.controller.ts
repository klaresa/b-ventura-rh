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
  UseFilters,
} from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import mongoose from "mongoose";
import { HttpExceptionFilter } from '../candidatos/http-exception.filter';

@Controller('empresas')
export class EmpresasController {
  constructor(private readonly empresasService: EmpresasService) {}

  @Post()
  async create(@Body() createEmpresaDto: CreateEmpresaDto) {
    return this.empresasService.create(createEmpresaDto);
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
