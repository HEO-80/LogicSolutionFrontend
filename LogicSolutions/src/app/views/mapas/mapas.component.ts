import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Subject, switchMap, take } from 'rxjs';
import { MapModel } from 'src/app/models/map';
import { VehiculosModel } from 'src/app/models/vehiculos';
import { MapasService } from 'src/app/services/mapas.service';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.scss']
})
export class MapasComponent implements OnInit {

@Input()
map?: MapModel;
// = {
//   id: 0,
//   nombre: '',
//   img: '',
//   tipo: '',
//   fechaRegistro: '',
//   itv: 0,
//   carga: '',
//   docs: '',
//   kmrecorridos: 0,
//   comentario: '',
//   map: {
//     id: 0,
//     nombre: '',
//     lat: 0,
//     lng: 0,
//     zoom: 0
//   }
// }

// @Input()
// mapa : MapModel ={
//   id: 0,
//   lat:0,
//   lng:0,
//   zoom:0,
//   nombre:''
// }

  displayedColumns: string[] = ['latitude', 'longitude'];

  mapSrc = '';

refreshData$ = new Subject<void>();

  constructor(private activatedRoute: ActivatedRoute,private mapasService: MapasService , private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
      this.mapSrc+='https://www.google.com/maps/embed/v1/place?key=';
      this.mapSrc += `${this.map?.lat},${this.map?.long}`;

    // this.activatedRoute.paramMap.pipe(
    //   take(1),
    //   switchMap((params) => {
    //     if (this.vehiculo) {
    //       return this.mapasService.getMapById(Number(this.vehiculo.id));
    //     }
    //     return EMPTY;
    //   })
    //   ).subscribe((mapa) => {
    //     if (mapa) {
    //       //this.mapa = mapa;
    //       // this.mapUrl += `${this.mapa.lat},${this.mapa.lng}`;
    //   }
    // })
  }

  getMapSrc(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.mapSrc);
  }

}
