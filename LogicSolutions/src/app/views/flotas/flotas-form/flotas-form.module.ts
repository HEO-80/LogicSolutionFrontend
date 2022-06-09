import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlotasFormComponent } from './flotas-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { MatLabel } from '@angular/material/form-field';

const routes: Routes = [
  { path: '', component: FlotasFormComponent },

];


@NgModule({
  declarations: [
    FlotasFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ]
})
export class FlotasFormModule { }
