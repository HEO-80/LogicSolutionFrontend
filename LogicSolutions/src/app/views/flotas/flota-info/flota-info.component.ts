import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EMPTY, Subject, switchMap, take } from 'rxjs';
import { FlotasModel } from 'src/app/models/flotas';
import { FlotasService } from 'src/app/services/flotas.service';
import { FlotasFormUpdateComponent } from '../flotas-form-update/flotas-form-update.component';
import {Location} from '@angular/common';

@Component({
  selector: 'app-flota-info',
  templateUrl: './flota-info.component.html',
  styleUrls: ['./flota-info.component.scss']
})
export class FlotaInfoComponent implements OnInit {

    id = 0;

  flota: FlotasModel = {
    id: 0,
    nombreFlota: '',
    tipoDeCarga: '',
    cantidadVehiculos: 0,
    vehiculos: []

  }

  refreshData$ = new Subject<void>();

  constructor(private activatedRoute: ActivatedRoute, private flotasService: FlotasService,private router: Router,private modalService: NgbModal, private _location:Location) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      take(1),
      switchMap((params) => {
        const idParam = params.get('id');
        if (idParam) {
          this.id = Number(idParam);
          return this.flotasService.getFlotaById(Number(idParam));
        }
        return EMPTY;
      })
    ).subscribe((flota) => {
      if (flota) {
        this.flota = flota;
        console.log(this.flota);
      }
    });
    this.refreshData$.pipe(
      switchMap(() => {
        if (this.id) {
          return this.flotasService.getFlotaById(this.id);
        }
        return EMPTY;
      })
    ).subscribe((flota) => {
      if (flota) {
        this.flota = flota;
      }
    });
  }

  openCar(id: number):void {
    this.router.navigate(['/vehiculos/card/' + id]);
    console.log("Buenos días "+ id)
  }


  clickFlotaToEdit(id:number) {
    const modal = this.modalService.open(FlotasFormUpdateComponent);
    modal.componentInstance.id = id;
    modal.result.then(
      this.handleModalFormClose.bind(this),
      this.handleModalFormClose.bind(this)
    )
  }

  handleModalFormClose() {
    alert('se ha cerrado el modal');
    this.refreshData$.next();
}


  FlotaDelete(indice:number) {

    this.flotasService.eliminarFlota(indice).subscribe(() => {
      console.log("res", indice);
      this.refreshData$.next();
      alert("Se ha eliminado la flota");
      this._location.back();
    });

    }

    backClicked() {
      this._location.back();
    }
}
