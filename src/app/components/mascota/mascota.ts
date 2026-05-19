import { Component } from '@angular/core';
import { MascotaService } from '../../service/mascota.service';
import { MascotaModel } from '../../models/mascota.model';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mascota',
  imports: [FormsModule],
  templateUrl: './mascota.html',
  styleUrl: './mascota.css',
})
export class Mascota implements OnInit {

  // Como inyectamos el servicio de mascota - mascota.service.ts
  // Requiere el listado
  // saber si estoy editanto o guardando una nueva mascota

  //Para mostrar el listado de mascotas al cargar la pagina
  ngOnInit(): void {
    this.listarMascotas();
  }

  //para el formulario
  mascotas: MascotaModel[] = [];

  //para la tabla
  mascota: MascotaModel = {
    id: 0,
    nombre: '',
    edad: 0
  };


  //para marcar en edicion o no
  editando: boolean = false;

  constructor(private mascotaService: MascotaService) {

  }

  listarMascotas() {
    this.mascotas = this.mascotaService.findAll();
  }

  GuardarMascota() {
    //Guardado mediante el servicio
    if (this.editando){
      this.mascotaService.update({ ...this.mascota });
      this.editando = false;
    }else{
    this.mascotaService.create ( {
      ...this.mascota
      //esta es otra forma de hacer lo mismo

      //id: this.mascota.id,
      //nombre : this.mascota.nombre,
      //edad : this.mascota.edad
      } ) 
    }
    this.limpiarMascota()
  }

  actualizarMascota(mascotaactualizar: MascotaModel) {
    this.mascota ={ ...mascotaactualizar};
    this.editando = true;
  }

  eliminarMascota(id:number) {
    this.mascotaService.delete(id);
    this.listarMascotas();
  }

  limpiarMascota(){
    this.mascota = {
      id: 0,
      nombre: '',
      edad: 0
    }
  }

}
