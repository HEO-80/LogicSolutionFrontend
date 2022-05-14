import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlotasComponent } from './components/flotas/flotas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PillsComponent } from './components/pills/pills.component';
import { FormVehiculComponent } from './components/form-vehicul/form-vehicul.component';
import { ListVehiculosComponent } from './components/list-vehiculos/list-vehiculos.component';
import { NadvarComponent } from './components/header/nadvar/nadvar.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { HomeComponent } from './components/home/home.component';


const AppRoute = [

  { path: '', component: HomeComponent },
  { path: 'flotas', component: FlotasComponent },
  { path: 'vehiculos', component: VehiculosComponent }

]
@NgModule({
  declarations: [
    AppComponent,
    FlotasComponent,
    HeaderComponent,
    FooterComponent,
    PillsComponent,
    FormVehiculComponent,
    ListVehiculosComponent,
    NadvarComponent,
    VehiculosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ListVehiculosComponent]
})
export class AppModule { }
