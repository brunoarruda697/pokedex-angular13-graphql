import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.scss']
})
export class PokecardComponent implements OnInit {
  @Input() url: string = '';
  @Input() name: string = '';
  @Input() image: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
