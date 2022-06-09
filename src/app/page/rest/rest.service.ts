import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './rest.model';

@Injectable({providedIn: 'root'})
export class RestService {
    url = 'http://localhost:4200/v1/poc';

    constructor(private httpClient: HttpClient) { }
    
    getPokemons(times: number): Observable<Array<Pokemon>> {
        return this.httpClient.get<Array<Pokemon>>(`${this.url}/${times.toString()}`);
    }

    getPokemonsConstructed(times: number): Observable<Array<Pokemon>> {
        return this.httpClient.get<Array<Pokemon>>(`${this.url}/${times.toString()}/constructed`);
    }
}