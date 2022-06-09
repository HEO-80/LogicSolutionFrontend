import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { FlotasModel } from 'src/app/models/flotas';
import { FlotasService } from 'src/app/services/flotas.service';

@Component({
  selector: 'app-flotas-form-update',
  templateUrl: './flotas-form-update.component.html',
  styleUrls: ['./flotas-form-update.component.scss']
})
export class FlotasFormUpdateComponent implements OnInit {


  @Input()
  id?: number;


  refreshData$ = new Subject<void>();

  displayedColumns: string[] = ['id', 'nombreFlota', 'tipoDeCarga'];
  form:FormGroup;

  constructor(private fb:FormBuilder, private flotasService: FlotasService, private activeModal: NgbActiveModal) {

    this.form = this.fb.group({

      id: 0,
      nombreFlota: ['',[Validators.maxLength(50)]],
      tipoDeCarga: ['',[Validators.maxLength(50)]],


    })
  }
  ngOnInit(): void {
    console.log("hola");
    if (this.id) {
      this.form.controls['id'].setValue(this.id);
    }
  }

  actualizarFlota(){
    this.form.controls['nombre'];
    console.log("valores",this.form.getRawValue());

    const flotaReq: FlotasModel = this.form.getRawValue();


    this.flotasService.actualizarFlota(flotaReq, flotaReq.id).subscribe((res: number) => {
      console.log("res", res);
      this.refreshData$.next();
      this.activeModal.close();
    });
  }

}
