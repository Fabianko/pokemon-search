import { Component, OnInit } from '@angular/core';
import {ApiPokemonService} from '../api-pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css'],
  providers: [ApiPokemonService]
})
export class SearchPokemonComponent implements OnInit {
  keySearch: string = "porygon";
  constructor(protected apiService: ApiPokemonService) { }

  ngOnInit(): void {
    this.searchPokemon();
  }

  public searchPokemon() {
    if (!this.keySearch)  {
      return;
    }
    this.apiService.getPokemon(this.keySearch).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

}
