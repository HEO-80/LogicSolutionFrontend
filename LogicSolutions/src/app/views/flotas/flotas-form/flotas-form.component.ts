import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlotasModel } from 'src/app/models/flotas';
import { FlotasService } from 'src/app/services/flotas.service';

@Component({
  selector: 'app-flotas-form',
  templateUrl: './flotas-form.component.html',
  styleUrls: ['./flotas-form.component.scss']
})
export class FlotasFormComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombreFlota', 'tipoDeCarga'];
  form:FormGroup;



  constructor(private fb:FormBuilder, private flotasService: FlotasService) {

  this.form = this.fb.group({

    id: 0,
    nombreFlota: ['',[Validators.maxLength(50)]],
    tipoDeCarga: ['',[Validators.maxLength(50)]],
  })
}

  ngOnInit(): void {
    console.log("hola");
  }

  enviarFlota(){
    this.form.controls['nombre'];
    console.log("valores",this.form.getRawValue());

    const flotaReq: FlotasModel = this.form.getRawValue();

    this.flotasService.guardarFlota(flotaReq).subscribe((res: number) => {
      console.log("res", res);
    });
  }
}
