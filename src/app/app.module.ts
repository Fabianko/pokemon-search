import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import {ApiPokemonService} from './api-pokemon.service';
@NgModule({
  declarations: [
    AppComponent,
    CardPokemonComponent,
    SearchPokemonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiPokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
