import { Component, Input } from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

/*   @Input()personajes:personaje[]=[];
 */
//al hacer el get y retornar personajes creo una istancias de personajes de la variable contenida en el servicio
get personajes(){
  return this.dbzService.personajes;
}

constructor(private dbzService:DbzService){

}

}
