import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiPokemonService {
  url: string = "https://pokeapi.co/api/v2/pokemon/"
  public pokemonSelected;
  constructor(private http: HttpClient) { }
 
  public getPokemon(value: string):Observable<any> {
    
    return this.http.get(this.url + value);
  }

}
