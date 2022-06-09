import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoFormUpdateComponent } from './vehiculo-form-update.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forChild(routes),
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ],
  declarations: [VehiculoFormUpdateComponent]
})
export class VehiculoFormUpdateModule { }
