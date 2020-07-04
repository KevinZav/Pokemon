import { Component, OnInit } from '@angular/core';
import { PokemonService, Pokemon } from '../../services/pokemon.service';
import { FavoritoService } from '../../services/favorito.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  constructor( private pokemonS: PokemonService, private favoritoS: FavoritoService ) { }
  pokemonesInteres: Pokemon[] = [];
  muestra = [10, 1, 6, 24, 'pikachu'];
  favoritos = [];
  loading = true;
  ngOnInit(): void {
    // this.pokemonS.getPokemon( 'pikachu' ).subscribe( resp => console.log(resp) );
    setTimeout( () => {
      const favoritos = this.getFavoritos();
      this.muestra.forEach( id => {
        this.pokemonS.getPokemon( id ).subscribe( pokemon => this.pokemonesInteres.push(pokemon));
      });
      favoritos.forEach( favorito => {
        this.pokemonS.getPokemon( favorito ).subscribe( pokemon => this.favoritos.push(pokemon) );
      });
      this.loading = false;
    }, 700);
  }
  getFavoritos() {
    return this.favoritoS.getFavoritos();
  }
}
