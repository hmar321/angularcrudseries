import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/models/Personaje';
import { ActivatedRoute, Params } from "@angular/router";
import { PersonajeService } from 'src/app/services/personaje.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {
  public personaje!: Personaje;

  constructor(private _route: ActivatedRoute, private _service: PersonajeService) {

  }

  ngOnInit(): void {
    this.cargarPersonaje();
  }

  cargarPersonaje(): void {
    this._route.params.subscribe((params: Params) => {
      if (params['id'] != null) {
        this._service.getPersonaje(parseInt(params['id'])).subscribe((data) => {
          this.personaje = data;
        });
      }
    });
  }
}
