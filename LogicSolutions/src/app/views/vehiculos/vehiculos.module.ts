import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosComponent } from './vehiculos.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { VehiculoCardComponent } from './vehiculo-card/vehiculo-card.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { VehiculoFormUpdateModule } from './vehiculo-form-update/vehiculo-form-update.module';

const routes: Routes = [
  { path: '', component: VehiculosComponent },
  // { path: 'card/:id', component: VehiculoCardComponent },
  {
    path: 'card',
    loadChildren: () => import('./vehiculo-card/vehiculo-card.module').then(m => m.VehiculoCardModule)
  }
];

@NgModule({
  declarations: [
    VehiculosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    VehiculoFormUpdateModule

  ]
})
export class VehiculosModule { }
