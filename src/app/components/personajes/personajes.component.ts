import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Personaje } from 'src/app/models/Personaje';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  public personajes!: Array<Personaje>;
  constructor(private _service: SerieService, private _route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.cargarPersonajes();
  }

  cargarPersonajes(): void {
    this._route.params.subscribe((params: Params) => {
      if (params["id"] != null) {
        this._service.getPersonajesSerie(parseInt(params["id"])).subscribe((data) => {
          this.personajes = data;
        });
      }
    });
  }
}
