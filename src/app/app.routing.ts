import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { CrearpersonajeComponent } from "./components/crearpersonaje/crearpersonaje.component";
import { ModificarpersonajeComponent } from "./components/modificarpersonaje/modificarpersonaje.component";
import { SerieComponent } from "./components/serie/serie.component";
import { PersonajeComponent } from "./components/personaje/personaje.component";
import { PersonajesComponent } from "./components/personajes/personajes.component";

const rutas: Routes = [
    { path: "", component: HomeComponent },
    { path: "nuevo", component: CrearpersonajeComponent },
    { path: "modificar", component: ModificarpersonajeComponent },
    { path: "serie/:id", component: SerieComponent },
    { path: "personajes/:id", component: PersonajesComponent },
    { path: "personaje/:id", component: PersonajeComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(rutas);