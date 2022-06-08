import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pokemon } from './rest.model';

const restMock: Array<Pokemon> = [
    {
        image: 'https://picsum.photos/50/50',
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1'
    },
    {
        image: 'https://picsum.photos/50',
        name: 'ivysaur',
        url: 'https://pokeapi.co/api/v2/pokemon/2'
    },
    {
        image: 'https://picsum.photos/50',
        name: 'venusaur',
        url: 'https://pokeapi.co/api/v2/pokemon/3'
    },
];

@Injectable({providedIn: 'root'})
export class RestService {
    url = 'https://graphql-agreggator.herokuapp.com/v1/poc';

    constructor(private httpClient: HttpClient) { }
    
    getPokemons(times: number): Observable<Array<Pokemon>> {
        // return this.httpClient.get<Array<Pokemon>>(`${this.url}/${times.toString()}`);
        return of(restMock);
    }
}