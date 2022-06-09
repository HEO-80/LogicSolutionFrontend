import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoCardComponent } from './vehiculo-card.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MapasModule } from '../../mapas/mapas.module';


const routes: Routes = [
   { path: ':id', component: VehiculoCardComponent },
  // { path: 'card/:id', component: VehiculoCardComponent },

];


@NgModule({
  declarations: [
    VehiculoCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MapasModule
  ]
})
export class VehiculoCardModule { }
