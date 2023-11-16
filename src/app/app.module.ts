import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { appRoutingProviders, routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { SerieService } from './services/serie.service';
import { PersonajeService } from './services/personaje.service';
import { SerieComponent } from './components/serie/serie.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { ModificarpersonajeComponent } from './components/modificarpersonaje/modificarpersonaje.component';
import { CrearpersonajeComponent } from './components/crearpersonaje/crearpersonaje.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SerieComponent,
    PersonajesComponent,
    PersonajeComponent,
    ModificarpersonajeComponent,
    CrearpersonajeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
  ],
  providers: [appRoutingProviders, SerieService, PersonajeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
