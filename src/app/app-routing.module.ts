import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphqlComponent } from './page/graphql/graphql.component';
import { RestComponent } from './page/rest/rest.component';

const routes: Routes = [
  {
    path: 'rest',
    component: RestComponent,
  },
  {
    path: 'graphql',
    component: GraphqlComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
