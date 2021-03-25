import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()

export class DbzService{

    private _personajes: Personaje[] = [
        {
          nombre:'Goku',
          poder: 10000
        },
        {
          nombre:'Veggeta',
          poder: 7000
        },
        {
          nombre:'Trunks',
          poder: 4000
        }
      ];

      get personajes() : Personaje[]{
          return[...this._personajes];
      }

    constructor(){
    }

    agregarnuevopersonaje(personaje: Personaje){
        this._personajes.push(personaje);
      }
}