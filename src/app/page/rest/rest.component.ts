import { Component, OnInit } from '@angular/core';
import { Pokemon } from './rest.model';
import { RestService } from './rest.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent implements OnInit {

  pokemons: Array<Pokemon> = [];
  pokemonsConstructed: Array<Pokemon> = [];

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.restService.getPokemons(5).subscribe((pokemons) => {
      this.pokemons = pokemons;
    });

    this.restService.getPokemonsConstructed(5).subscribe((pokemonsConstructed) => {
      this.pokemonsConstructed = pokemonsConstructed;
    })
  }

}
