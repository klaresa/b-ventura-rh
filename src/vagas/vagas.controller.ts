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
import { VagasService } from './vagas.service';
import { CreateVagaDto } from './dto/create-vaga.dto';
import { UpdateVagaDto } from './dto/update-vaga.dto';
import mongoose from "mongoose";
import { AuthenticatedGuard } from '../auth/authenticated.guard';
import { AuthGuard } from '@nestjs/passport';
import { GetCurrentUserById } from '../utils';

@Controller('vagas')
@UseGuards(AuthGuard('jwt'))
export class VagasController {
  constructor(private readonly vagasService: VagasService) {}

  @Post()
  create(@Body() createVagasDto: CreateVagaDto) {
    return this.vagasService.create(createVagasDto);
  }

  @Get()
  findAll() {
    return this.vagasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new HttpException('Invalid Id', HttpStatus.NOT_FOUND);
    return this.vagasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVagasDto: UpdateVagaDto) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new HttpException('Invalid Id', HttpStatus.NOT_FOUND);
    return this.vagasService.update(id, updateVagasDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new HttpException('Invalid Id', HttpStatus.NOT_FOUND);
    return this.vagasService.remove(id);
  }

  // @UseGuards(AuthGuard('jwt'))
  // @Get('authenticate')
  // authenticated(@GetCurrentUserById() userId: number): any { // substitui o @Request() req -> req.user
  //   return { message: 'ok' }; // tem que passar para o serv
  // }
}
