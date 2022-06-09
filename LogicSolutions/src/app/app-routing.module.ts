import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
  loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
},
  { path: 'home',
  loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
},
  {
    path: 'flotas',
    loadChildren: () => import('./views/flotas/flotas.module').then(m => m.FlotasModule)
  },
  {
    path: 'vehiculos',
    loadChildren: () => import('./views/vehiculos/vehiculos.module').then(m => m.VehiculosModule)
  },
  {
    path: 'precio',
    loadChildren: () => import('./views/precio/precio.module').then(m => m.PrecioModule)
  },
  {
    path: 'contactos',
    loadChildren: () => import('./views/contactos/contactos.module').then(m => m.ContactosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
