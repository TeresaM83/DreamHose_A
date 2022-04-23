import { Roles } from "../Rol/rol";

export class Cliente {
  id!: number;
  nombres!: string;
  a_paterno!: string;
  a_materno!: string;
  dni!: string;
  direccion!: string;
  roles!: Roles;
  telefono!: string;
  correo!: string;
  contrasena!: string;
  estado!: string;
}

