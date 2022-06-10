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
  UseGuards,
} from '@nestjs/common';
import { RespostasService } from './respostas.service';
import { CreateRespostaDto } from './dto/create-resposta.dto';
import { UpdateRespostaDto } from './dto/update-resposta.dto';
import mongoose from "mongoose";
import { AuthenticatedGuard } from '../auth/authenticated.guard';

@Controller('respostas')
@UseGuards(AuthenticatedGuard)
export class RespostasController {
  constructor(private readonly respostasService: RespostasService) {}

  @Post()
  create(@Body() createRespostaDto: CreateRespostaDto) {
    return this.respostasService.create(createRespostaDto);
  }

  @Get()
  findAll() {
    return this.respostasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new HttpException('Invalid Id', HttpStatus.NOT_FOUND);
    return this.respostasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRespostaDto: UpdateRespostaDto) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new HttpException('Invalid Id', HttpStatus.NOT_FOUND);
    return this.respostasService.update(id, updateRespostaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new HttpException('Invalid Id', HttpStatus.NOT_FOUND);
    return this.respostasService.remove(id);
  }
}
