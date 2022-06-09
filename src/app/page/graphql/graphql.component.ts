import { Component, OnInit } from '@angular/core';
import { gql } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { Pokemon } from '../rest/rest.model';

@Component({
  selector: 'app-graphql',
  templateUrl: './graphql.component.html',
  styleUrls: ['./graphql.component.scss']
})
export class GraphqlComponent implements OnInit {

  pokemons: Array<Pokemon> = [];

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.watchQuery<{pokemons: Array<Pokemon>}>({
      query: gql`query GetPokemons($times: Int) {
        pokemons(times: $times) {
          name
          url
          image
        }
      }`,
      variables: {
        times: 5
      }
    }).valueChanges.subscribe((result) => {
      const { data } = result;
      const { pokemons } = data;
      this.pokemons = pokemons;
    })
  }
}
