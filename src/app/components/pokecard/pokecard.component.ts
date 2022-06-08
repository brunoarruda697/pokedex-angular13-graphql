import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/page/rest/rest.model';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.scss']
})
export class PokecardComponent implements OnInit {
  @Input() pokemon!: Pokemon


  constructor() { }

  ngOnInit(): void {
  }

}
