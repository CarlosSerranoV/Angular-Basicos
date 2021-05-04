import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

heroes:string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán america'];
heroeBorrado:string='';

borrarHeroe():void{
const heroeBorrado = this.heroes.shift() || '';  
this.heroeBorrado = heroeBorrado;
}
}
