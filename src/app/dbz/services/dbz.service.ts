import { Injectable } from "@angular/core";
import { personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {



    private _personajes: personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 8500
        }
    ];

    get personajes(): personaje[] {
        return [...this._personajes];
    }

    constructor() {
        console.log("Servicio inicializado");
    }

    agregarPersonaje(personaje: personaje) {
        this._personajes.push(personaje);
    }
}