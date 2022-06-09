import { Component, OnInit } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, finalize, Subject, switchMap, take } from 'rxjs';
import { VehiculosModel } from 'src/app/models/vehiculos';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import {Location} from '@angular/common';
import { VehiculoFormUpdateComponent } from '../vehiculo-form-update/vehiculo-form-update.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vehiculo-card',
  templateUrl: './vehiculo-card.component.html',
  styleUrls: ['./vehiculo-card.component.scss']
})
export class VehiculoCardComponent implements OnInit {

  refreshData$ = new Subject<void>();

  isLoading = true;

  id = 0;

  vehiculo: VehiculosModel = {
    id: 0,
    nombre: '',
    img: '',
    tipo: '',
    fechaRegistro: '',
    itv: 0,
    carga: '',
    docs: '',
    kmrecorridos: 0,
    comentario: '',
    flotaId: 0,
    maps: [{
      id: 0,
      nombre: '',
      lat: 0,
      long: 0,
      zoom: 0
    }]
  }

  constructor(private activatedRoute: ActivatedRoute, private vehiculosService: VehiculosService, private _location: Location,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      take(1),
      switchMap((params) => {
        console.log(params);
        const idParam = params.get('id');
        if (idParam) {
          console.log(idParam);
          this.id = Number(idParam);
          return this.vehiculosService.getVehiculoById(Number(idParam));
        }
        return EMPTY;
      }),
      finalize(() => this.isLoading = false)
    ).subscribe((vehicle) => {
      if (vehicle) {
        this.vehiculo = vehicle;
        console.log('Vehiculo card', this.vehiculo);
      }
    });
    this.refreshData$.pipe(
      switchMap(() => {
        if (this.id) {
          return this.vehiculosService.getVehiculoById(this.id);
        }
        return EMPTY;
      })
    ).subscribe((vehiculo) => {
      if (vehiculo) {
        this.vehiculo = vehiculo;
      }
    });
  }




  backClicked() {
    this._location.back();
  }
  // back(id: number):void {
  //   this.router.navigate(['/vehiculos/']);
  //   console.log("Buenos días "+ id)
  // }

  VehiculoToEdit(id:number) {
    const modal = this.modalService.open(VehiculoFormUpdateComponent);
    modal.componentInstance.id = id;
    modal.result.then(
      this.handleModalFormClose.bind(this),
      this.handleModalFormClose.bind(this)
    )
  }

  handleModalFormClose() {
    alert('se ha cerrado el modal');
    this.modalService.dismissAll();
    this.refreshData$.next();
}
vehiculoDelete(indice: number){
  this.vehiculosService.eliminarVehiculo(indice).subscribe(() => {
    console.log("res", indice);
    this.refreshData$.next();
    alert("Se ha eliminado el vehiculo");
    this._location.back();
  });
}
}
