import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiculosModel } from 'src/app/models/vehiculos';
import { Subject } from 'rxjs';

@Component({
  templateUrl: './vehiculo-form.component.html',
  styleUrls: ['./vehiculo-form.component.scss']
})
export class VehiculoFormComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'tipo', 'img', 'comentario', 'fechaRegistro', 'itv', 'carga', 'docs', 'flotaId', 'kmrecorridos'];
  form:FormGroup;

  refreshData$ = new Subject<void>();

  constructor(private fb:FormBuilder, private vehiculosService: VehiculosService, private modalService: NgbModal,private activeModal: NgbActiveModal) {

    this.form = this.fb.group({

      nombre: ['',[Validators.maxLength(50)]],
      tipo: ['',[Validators.maxLength(50)]],
      fechaRegistro: [null],
      itv: [0],
      carga: ['',[Validators.maxLength(40)]],
      docs: ['',[Validators.maxLength(50)]],
      kmrecorridos: [0],
      comentario: ['',[Validators.maxLength(300)]],
      flotaId: [0, [Validators.required]],
      img: ['']

   })
   }

  ngOnInit(): void {
    console.log("hola");
  }

  enviarVehiculo(){
    this.form.controls['nombre'];
    console.log("valores",this.form.getRawValue());

    const vehiculoReq: VehiculosModel = this.form.getRawValue();

    this.vehiculosService.guardarVehiculo(vehiculoReq).subscribe((res: number) => {
      console.log("res", res);
      this.refreshData$.next();
      this.activeModal.close();
    });
  }
}
