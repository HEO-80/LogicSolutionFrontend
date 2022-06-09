import { FlotasModel } from './../../models/flotas';
import { FlotasModule } from './flotas.module';
import { FlotasService } from './../../services/flotas.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { startWith, Subject, switchMap } from 'rxjs';
import { VehiculoFormComponent } from '../vehiculos/vehiculo-form/vehiculo-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FlotasFormComponent } from './flotas-form/flotas-form.component';
import { Router } from '@angular/router';
import { FlotasFormUpdateComponent } from './flotas-form-update/flotas-form-update.component';

@Component({
  selector: 'app-flotas',
  templateUrl: './flotas.component.html',
  styleUrls: ['./flotas.component.scss']
})
  export class FlotasComponent implements OnInit, AfterViewInit {
    flotas: FlotasModel[] = [];

    //constructor(private flotasService:FlotasService) { }

    dataSource: MatTableDataSource<FlotasModel>;

    displayedColumns: string[] = ['id', 'nombreFlota', 'tipoDeCarga', 'cantidadVehiculos', 'actions'];
    //form:FormGroup;

    refreshData$ = new Subject<void>();


  constructor(private FlotasService: FlotasService, private modalService: NgbModal,private router: Router) {

    this.dataSource = new MatTableDataSource(this.flotas);

  }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.refreshData$.pipe(
      startWith({}),
      switchMap(() => {
        return this.FlotasService.getAllFlotas();
      }),
    ).subscribe((res: FlotasModel[]) => {
      this.flotas = res;
      this.dataSource.data = this.flotas;
    });
  }

  clickAddFlota() {
    const modal = this.modalService.open(FlotasFormComponent);
    modal.result.then(
      this.handleModalFormClose.bind(this),
      this.handleModalFormClose.bind(this)
    )
    }

    handleModalFormClose() {
      alert('se ha cerrado el modal');
      this.refreshData$.next();
  }

  openFlota(id: number):void {
    this.router.navigate(['/flotas/info/' + id]);
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

  FlotaDelete(indice:number) {

    this.FlotasService.eliminarFlota(indice).subscribe(() => {
      console.log("res", indice);
      this.refreshData$.next();
      alert("Se ha eliminado la flota");
    });

    }
}
