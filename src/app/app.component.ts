import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {}

  onHomePage(): void {
    this.router.navigateByUrl('/')
  }

  onRestPage(): void {
    this.router.navigateByUrl('/rest')
  }

  onGraphqlPage(): void {
    this.router.navigateByUrl('/graphql')
  }
}
