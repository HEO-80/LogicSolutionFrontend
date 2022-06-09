import { VehiculosModel } from "./vehiculos";

export interface FlotasModel {
  id: number;
  nombreFlota: string;
  tipoDeCarga: string;
  cantidadVehiculos: number;
  vehiculos: VehiculosModel[];

}
