import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { PokecardComponent } from './components/pokecard/pokecard.component';
import { RestComponent } from './page/rest/rest.component';
import { GraphqlComponent } from './page/graphql/graphql.component';

@NgModule({
  declarations: [
    AppComponent,
    PokecardComponent,
    RestComponent,
    GraphqlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
