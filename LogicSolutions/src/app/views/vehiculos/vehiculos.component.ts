import { Component, OnInit, AfterViewInit } from '@angular/core';
import { startWith, Subject, switchMap } from 'rxjs';
import { VehiculosModel } from 'src/app/models/vehiculos';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import { MatTableDataSource } from '@angular/material/table';
import { VehiculoFormComponent } from './vehiculo-form/vehiculo-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiculoFormUpdateComponent } from './vehiculo-form-update/vehiculo-form-update.component';


@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})

export class VehiculosComponent implements OnInit, AfterViewInit {
  vehiculos: VehiculosModel[] = [];

  //constructor(private vehiculosService:VehiculosService) { }

  dataSource: MatTableDataSource<VehiculosModel>;

  displayedColumns: string[] = ['id', 'nombre', 'img', 'comentario', 'tipo', 'fechaRegistro', 'itv', 'carga', 'docs', 'kmrecorridos', 'flotaId', 'actions'];




  refreshData$ = new Subject<void>();


  constructor(private VehiculosService: VehiculosService, private modalService: NgbModal, private router: Router) {

    this.dataSource = new MatTableDataSource(this.vehiculos);

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.refreshData$.pipe(
      startWith({}),
      switchMap(() => {
        return this.VehiculosService.getAllVehiculos();
      }),
    ).subscribe((res: VehiculosModel[]) => {
      this.vehiculos = res;
      this.dataSource.data = this.vehiculos;
    });
  }

  clickAddVehiculo() {
    const modal = this.modalService.open(VehiculoFormComponent);
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

  openCar(id: number):void {
    this.router.navigate(['/vehiculos/card/' + id]);
    console.log("Buenos días "+ id)
  }

  VehiculoToEdit(id:number) {
      const modal = this.modalService.open(VehiculoFormUpdateComponent);
      modal.componentInstance.id = id;
      modal.result.then(
        this.handleModalFormClose.bind(this),
        this.handleModalFormClose.bind(this)
      )
    }

  vehiculoDelete(indice: number){
    this.VehiculosService.eliminarVehiculo(indice).subscribe(() => {
      console.log("res", indice);
      this.refreshData$.next();
    });
}
}
