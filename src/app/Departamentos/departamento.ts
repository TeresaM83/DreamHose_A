import { Edificio } from "../Edificios/edificio";

export class Departamento {
    id: number | undefined;
    piso: number | undefined;
    edificio: Edificio | undefined;
    n_habitaciones: number | undefined;
    n_banos: number | undefined;
    area: number | undefined;
    precio: number | undefined;
    estado: string | undefined;
}
