import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent implements OnInit {

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.restService.getPokemons(5).subscribe((value) => {
      console.log(value, 'value');
    })
  }

}
