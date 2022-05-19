import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, UseFilters, HttpException, HttpStatus, ValidationPipe, UsePipes,
} from '@nestjs/common';
import { CandidatosService } from './candidatos.service';
import { CreateCandidatoDto } from './dto/create-candidato.dto';
import { UpdateCandidatoDto } from './dto/update-candidato.dto';
import { HttpExceptionFilter } from './http-exception.filter';
import mongoose from 'mongoose';

@Controller('candidatos')
@UsePipes(new ValidationPipe({ transform: true }))
export class CandidatosController {
  constructor(private readonly candidatosService: CandidatosService) {}

  @Post()
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() createCandidatoDto: CreateCandidatoDto) {
    // if (createCandidatoDto !instanceof CreateCandidatoDto) throw new HttpException(
    //   'Invalid request', HttpStatus.BAD_REQUEST);
    return this.candidatosService.create(createCandidatoDto);
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
