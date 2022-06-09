import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrecioComponent } from './precio.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PrecioComponent },
];


@NgModule({
  declarations: [
    PrecioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PrecioModule { }
