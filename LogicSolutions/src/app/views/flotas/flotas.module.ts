import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlotasComponent } from './flotas.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { FlotasFormUpdateModule } from './flotas-form-update/flotas-form-update.module';


const routes: Routes = [
  { path: '', component: FlotasComponent },
  {
  path: 'info/:id',
  loadChildren: () => import('./flota-info/flota-info.module').then(m => m.FlotaInfoModule)
  }
];

@NgModule({
  declarations: [
    FlotasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    FlotasFormUpdateModule
  ]
})

export class FlotasModule { }
