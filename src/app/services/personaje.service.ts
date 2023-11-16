import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Personaje } from "../models/Personaje";

@Injectable()
export class PersonajeService {
    public url: string;
    constructor(private _http: HttpClient) {
        this.url = environment.urlApiSeries;
    }

    getPersonajes(): Observable<any> {
        var request = "api/personajes";
        return this._http.get(this.url + request);
    }
    getPersonaje(id:number): Observable<any> {
        var request = "api/personajes/"+id;
        return this._http.get(this.url + request);
    }

    insertPersonaje(personaje: Personaje): Observable<any> {
        var request = "api/personajes";
        var dato = JSON.stringify(personaje);
        var header = new HttpHeaders().set("content-type", "application/json");
        return this._http.post(this.url + request, dato, { headers: header });
    }

    updatePersonajeSerie(idPersonaje: number, idSerie: number): Observable<any> {
        var request = "api/personajes/" + idPersonaje + "/" + idSerie;
        var header = new HttpHeaders().set("content-type", "application/json");
        return this._http.post(this.url + request, {}, { headers: header });
    }
}