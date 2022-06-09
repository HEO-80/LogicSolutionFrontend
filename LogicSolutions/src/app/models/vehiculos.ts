import { MapModel } from "./map";

export interface VehiculosModel {
  id: number;
  nombre: string;
  img: string;
  tipo: string;
  fechaRegistro: string;
  itv: number;
  carga: string;
  docs: string;
  kmrecorridos: number;
  comentario: string;
  maps: MapModel[];
  flotaId: number;
}
