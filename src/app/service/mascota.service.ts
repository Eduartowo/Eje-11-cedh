import { Injectable } from '@angular/core';
import { MascotaModel } from '../models/mascota.model';

@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  //Datos on memory, sin consumo de API

  mascotas: MascotaModel[] = [];
  idCounter: number = 0;

  constructor() {
    this.mascotas = [
      {id: 1, nombre: 'Pluto', edad: 90},
      {id: 2, nombre: 'Burrito IPN', edad: 90},
      {id: 3, nombre: 'Mapache', edad: 50}
    ];
    this.idCounter = 4;
  }

  create(nuevaMascota: MascotaModel) {
    nuevaMascota.id = this.idCounter;
    this.idCounter++;
    this.mascotas.push(nuevaMascota);
  }

  findAll()  {
    return this.mascotas;
  }

  findOne(id: number) {
    return this.mascotas.find(mascota => mascota.id === id);
  }

  delete(id: number) {
  this.mascotas = this.mascotas.filter((mascota) => mascota.id !== id);
  } 

  update(mascotaUpdate: MascotaModel) {
  const indexUpdate = this.mascotas.findIndex((mascota) => mascota.id === mascotaUpdate.id);
  if (indexUpdate !== -1) {
    this.mascotas[indexUpdate] = mascotaUpdate;
  }
  }

}
