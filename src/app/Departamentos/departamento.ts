import { Edificio } from "../Edificios/edificio";

export class Departamento {
    id!: number ;
    piso!: number ;
    n_habitaciones!: number ;
    n_banos!: number ;
    area!: number ;
    precio!: number ;
    estado!: string ;
    edificio!: Edificio ;
}
