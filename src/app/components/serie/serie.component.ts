import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/Serie';
import { SerieService } from 'src/app/services/serie.service';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  public serie!: Serie;
  constructor(private _service: SerieService, private _route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.cargarSerie();
  }

  cargarSerie(): void {
    this._route.params.subscribe((params: Params) => {
      if (params["id"] != null) {
        this._service.getSerie(parseInt(params["id"])).subscribe((data) => {
          this.serie = data;
        });
      }
    });
  }
}
