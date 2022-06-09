import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pokemon } from './rest.model';

const restMock: Array<Pokemon> = [
    {
        image: 'https://picsum.photos/100/100',
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1'
    },
    {
        image: 'https://picsum.photos/100/100',
        name: 'ivysaur',
        url: 'https://pokeapi.co/api/v2/pokemon/2'
    },
    {
        image: 'https://picsum.photos/100/100',
        name: 'venusaur',
        url: 'https://pokeapi.co/api/v2/pokemon/3'
    },
    {
        image: 'https://picsum.photos/100/100',
        name: 'batata',
        url: 'https://pokeapi.co/api/v2/pokemon/4'
    },
];

@Injectable({providedIn: 'root'})
export class RestService {
    url = 'http://localhost:8080/v1/poc';

    constructor(private httpClient: HttpClient) { }
    
    getPokemons(times: number): Observable<Array<Pokemon>> {
        var headers = new HttpHeaders();
        headers.append('Access-Control-Allow-Origin', '*');

        return this.httpClient.get<Array<Pokemon>>(`${this.url}/${times.toString()}`, { headers });
        // return of(restMock);
    }
}