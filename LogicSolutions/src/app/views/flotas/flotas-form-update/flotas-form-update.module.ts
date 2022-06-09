import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlotasFormUpdateComponent } from './flotas-form-update.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // { path: '', component: FlotasFormUpdateComponent },

];

@NgModule({

  declarations: [
    FlotasFormUpdateComponent
  ],
  imports: [
    CommonModule,
    // RouterModule.forChild(routes),
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ]
})
export class FlotasFormUpdateModule { }
