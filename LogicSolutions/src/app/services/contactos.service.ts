import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContactosModel } from '../models/Contactos';


@Injectable({
  providedIn: 'root'
})
export class ContactosService {


  endpoint = '';

constructor(private http: HttpClient) {
  this.endpoint = `${environment.apiURL}/Contactos`;

}

guardarContacto(contacto: ContactosModel): Observable<number> {
  return this.http.post<number>(this.endpoint, contacto);

}
}
