import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehiculosModel } from '../models/vehiculos';
import { FlotasModel } from '../models/flotas';

@Injectable({
  providedIn: 'root'
})

export class FlotasService {

  endpoint = '';

  constructor(private http: HttpClient) {
    this.endpoint = `${environment.apiURL}/Flotas`;
  }

  getAllFlotas(): Observable<FlotasModel[]> {
    return this.http.get<FlotasModel[]>(`${this.endpoint}`);
  }

  guardarFlota(flota: FlotasModel): Observable<number> {
    return this.http.post<number>(`${this.endpoint}`, flota);

  }
  getFlotaById(id: number): Observable<FlotasModel> {
    return this.http.get<FlotasModel>(`${this.endpoint}/${id}`);
  }

  actualizarFlota(flota: FlotasModel, id: number): Observable<number> {
    return this.http.put<number>(`${this.endpoint}/${flota.id}`, flota);
  }

  eliminarFlota(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}/${id}`);
  }


}
