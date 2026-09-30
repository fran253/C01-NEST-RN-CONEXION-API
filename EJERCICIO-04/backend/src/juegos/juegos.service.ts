import { Injectable } from '@nestjs/common';

@Injectable()
export class JuegosService {
  private juegos = [
    { id: 1, nombre: 'Zelda', genero: 'aventura' },
    { id: 2, nombre: 'God of War', genero: 'aventura' },
    { id: 3, nombre: 'FIFA', genero: 'deportes' },
  ];

  findAll(genero?: string) {
    if (!genero) {
      return this.juegos;
    }
    return this.juegos.filter((j) => j.genero === genero);
  }

  findOne(id: number) {
    return this.juegos.find((j) => j.id === id);
  }
}