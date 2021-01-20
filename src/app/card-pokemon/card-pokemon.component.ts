import { Component, OnInit } from '@angular/core';
import {ApiPokemonService} from '../api-pokemon.service';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css'],
  providers: [ApiPokemonService]
})
export class CardPokemonComponent implements OnInit {
  pokemonSelected: any;
  constructor(public apiService: ApiPokemonService) { }

  ngOnInit(): void {
    this.apiService.pokemonSelectedChanged.subscribe(
      (data) => {
       this.reloadPokemonSelected();
      }
    );
  }

  public reloadPokemonSelected() {
    this.pokemonSelected = undefined;
    setTimeout(() => {
      this.pokemonSelected = this.apiService.pokemonSelected;
    },0)
  
  }

}

