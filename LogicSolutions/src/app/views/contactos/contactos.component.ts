import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { ContactosModel } from 'src/app/models/Contactos';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'edad', 'empresa', 'email', 'direccion', 'comentario'];
    form:FormGroup;

    refreshData$ = new Subject<void>();

  constructor(private fb:FormBuilder, private contactosService: ContactosService) {

    this.form = this.fb.group({

      nombre: ['',[Validators.required,Validators.maxLength(50)]],
      apellido: [''],
      edad: [''],
      empresa: [''],
      email: ['',[Validators.required]],
      direccion: [''],
      comentario: ['',[Validators.maxLength(200)]]

   })
  }

  ngOnInit(): void {
    console.log("hola");
  }

  enviarContacto(){
    this.form.controls['nombre'];
    console.log("valores",this.form.getRawValue());
    this.refreshData$.next();
    const contactoReq: ContactosModel = this.form.getRawValue();
     alert("Contacto guardado, Gracias");
    this.contactosService.guardarContacto(contactoReq).subscribe((res: number) => {
      console.log("res", res);
      // alert("Contacto guardado, Gracias");
    });
  }
}
