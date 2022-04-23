import { Edificio } from "../edificios/edificio";

export class Departamento {
    id!: number ;
    piso!: number ;
    edificio!: Edificio;
    n_habitaciones!: number ;
    n_banos!: number ;
    area!: number ;
    precio!: number ;
    estado!: string ;
}
