import { Controller, Get, Param, Query } from '@nestjs/common';
import { JuegosService } from './juegos.service';

@Controller('juegos')
export class JuegosController {
  constructor(private readonly juegosService: JuegosService) {}

  @Get()
  findAll(@Query('genero') genero?: string) {
    return this.juegosService.findAll(genero);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.juegosService.findOne(Number(id));
  }
}