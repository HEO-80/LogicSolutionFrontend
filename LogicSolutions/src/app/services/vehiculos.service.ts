import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehiculosModel } from '../models/vehiculos';

@Injectable({
  providedIn: 'root'
})

export class VehiculosService {

  endpoint = '';

  constructor(private http: HttpClient) {
    this.endpoint = `${environment.apiURL}/Vehiculos`;
  }

  getAllVehiculos(): Observable<VehiculosModel[]> {
    return this.http.get<VehiculosModel[]>(`${this.endpoint}`);
  }

  guardarVehiculo(vehiculo: VehiculosModel): Observable<number> {
    return this.http.post<number>(`${this.endpoint}`, vehiculo);
  }

  getVehiculoById(id: number): Observable<VehiculosModel> {
    return this.http.get<VehiculosModel>(`${this.endpoint}/${id}`);
  }

  actualizarVehiculo(vehiculo: VehiculosModel, id: number): Observable<number> {
    return this.http.put<number>(`${this.endpoint}/${vehiculo.id}`, vehiculo);
  }

  eliminarVehiculo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}/${id}`);
  }
}
