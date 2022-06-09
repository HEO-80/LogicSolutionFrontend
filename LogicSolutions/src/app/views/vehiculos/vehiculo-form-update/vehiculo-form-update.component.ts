import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { VehiculosModel } from 'src/app/models/vehiculos';
import { VehiculosService } from 'src/app/services/vehiculos.service';



@Component({
  selector: 'app-vehiculo-form-update',
  templateUrl: './vehiculo-form-update.component.html',
  styleUrls: ['./vehiculo-form-update.component.scss']
})
export class VehiculoFormUpdateComponent implements OnInit {

  @Input()
  id?: number;

  refreshData$ = new Subject<void>();

  displayedColumns: string[] = ['id', 'nombre', 'img', 'tipo', 'fechaRegistro', 'itv', 'carga', 'docs', 'kmrecorridos', 'comentario', 'flotaId', 'maps'];
  form:FormGroup;

  constructor(private fb:FormBuilder, private vehiculosService: VehiculosService, private activeModal: NgbActiveModal) {

    this.form = this.fb.group({


      id: 0,
      nombre: ['',[Validators.maxLength(50)]],
      img: [''],
      tipo: ['',[Validators.maxLength(50)]],
      fechaRegistro: [null],
      itv: [0],
      carga: ['',[Validators.maxLength(40)]],
      docs: ['',[Validators.maxLength(50)]],
      kmrecorridos: [0],
      comentario: ['', [Validators.maxLength(300)]],
      flotaId: [1,[Validators.required]]

    })
  }

  ngOnInit() {
    console.log("hola");
    if (this.id) {
      this.form.controls['id'].setValue(this.id);
  }
  }


  actualizarVehiculo() {
    this.form.controls['nombre'];
    console.log("valores",this.form.getRawValue());

    const vehiculoReq: VehiculosModel = this.form.getRawValue();


    this.vehiculosService.actualizarVehiculo(vehiculoReq, vehiculoReq.id).subscribe((res: number) => {
      console.log("res", res);
      this.refreshData$.next();
      this.activeModal.close();
    });
  }

}

