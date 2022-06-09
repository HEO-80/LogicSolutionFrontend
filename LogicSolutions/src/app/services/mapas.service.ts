import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehiculosModel } from '../models/vehiculos';
import { MapModel } from '../models/map';


@Injectable({
  providedIn: 'root'
})
export class MapasService {

  endpoint = '';

  constructor(private http: HttpClient) {
    this.endpoint = `${environment.apiURL}/Mapas`;
  }

getAllMapas(): Observable<MapModel[]> {
  return this.http.get<MapModel[]>(`${this.endpoint}`);
}
getMapById(id: number): Observable<MapModel> {
  return this.http.get<MapModel>(`${this.endpoint}/${id}`);
}

}
