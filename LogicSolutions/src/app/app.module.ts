import { ContactosModule } from './views/contactos/contactos.module';
import { HeaderModule } from './views/header/header.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterModule } from './views/footer/footer.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { VehiculoFormComponent } from './views/vehiculos/vehiculo-form/vehiculo-form.component';
import { ContactosService } from './services/contactos.service';
import { VehiculoFormModule } from './views/vehiculos/vehiculo-form/vehiculo-form.module';
import { FlotasFormModule } from './views/flotas/flotas-form/flotas-form.module';
import { VehiculoCardModule } from './views/vehiculos/vehiculo-card/vehiculo-card.module';
import { MapasModule } from './views/mapas/mapas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FooterModule,
    NoopAnimationsModule,
    HeaderModule,
    ContactosModule,
    VehiculoFormModule,
    VehiculoCardModule,
    MapasModule,
    FlotasFormModule
  ],
  providers: [ContactosService],
  bootstrap: [AppComponent],
  entryComponents: [VehiculoFormComponent]
})
export class AppModule { }
