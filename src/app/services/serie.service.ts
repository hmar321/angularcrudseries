import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class SerieService {
    public url!: string;
    constructor(private _http: HttpClient) {
        this.url = environment.urlApiSeries;
    }
    getSeries(): Observable<any> {
        var request = "api/series";
        return this._http.get(this.url + request);
    }

    getPersonajesSerie(id: number): Observable<any> {
        var request = "api/series/personajesserie/" + id;
        return this._http.get(this.url + request);
    }

    getSerie(id: number): Observable<any> {
        var request = "api/series/" + id;
        return this._http.get(this.url + request);
    }
}
