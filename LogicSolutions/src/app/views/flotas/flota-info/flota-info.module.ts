import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlotaInfoComponent } from './flota-info.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';




const routes: Routes = [
  { path: '', component: FlotaInfoComponent },
 // { path: 'card/:id', component: VehiculoCardComponent },

];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ],
  declarations: [FlotaInfoComponent]
})
export class FlotaInfoModule { }
