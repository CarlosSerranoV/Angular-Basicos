import { Component, EventEmitter, Input, Output } from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {


  @Input() nuevo: personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService) {

  }

  /*   @Output() onNuevoPersonaje: EventEmitter<personaje> = new EventEmitter();
   */
  agregar() {
    if (this.nuevo.nombre.trim().length === 0) { return; }


    this,this.dbzService.agregarPersonaje(this.nuevo);
    /*     this.onNuevoPersonaje.emit(this.nuevo);
     */
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}