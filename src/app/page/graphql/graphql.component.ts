import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../rest/rest.model';
import { RestService } from '../rest/rest.service';

@Component({
  selector: 'app-graphql',
  templateUrl: './graphql.component.html',
  styleUrls: ['./graphql.component.scss']
})
export class GraphqlComponent implements OnInit {

  pokemons: Array<Pokemon> = [];

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.restService.getPokemons(5).subscribe((pokemons) => {
      this.pokemons = pokemons;
    })
  }

}
