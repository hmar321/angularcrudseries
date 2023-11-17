import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/Serie';
import { PersonajeService } from 'src/app/services/personaje.service';
import { SerieService } from 'src/app/services/serie.service';
import { Router } from "@angular/router";
import { Personaje } from 'src/app/models/Personaje';

@Component({
  selector: 'app-crearpersonaje',
  templateUrl: './crearpersonaje.component.html',
  styleUrls: ['./crearpersonaje.component.css']
})
export class CrearpersonajeComponent implements OnInit {
  public personaje!: Personaje;
  public series!: Array<Serie>;

  constructor(
    private _serieService: SerieService,
    private _personajeService: PersonajeService,
    private _router: Router,
  ) {
    this.personaje = new Personaje(0, "", "", 0);
  }
  ngOnInit(): void {
    this._serieService.getSeries().subscribe((data) => {
      this.series = data;
    });
  }

  crearPersonaje():void{
    console.log(this.personaje);
    //LA SERIE SE TOMA COMO STRING !!!
  }
}
