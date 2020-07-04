import { Component, OnInit } from '@angular/core';
import { PokemonService, Pokemon } from '../../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private pokemonS: PokemonService ) { }
  muestra = [ 216, 13, 81, 149, 197, 94, 56, 62, 74, 35,
              202, 52, 53, 1, 6, 24, 25, 60, 105, 7, 18,
              208, 311, 330, 331, 151, 158, 252, 144, 249,
              384 ];
  pokemones: Pokemon[] = [];
  async ngOnInit() {
    // this.pokemonS.getPokemon( 'lugia' ).subscribe( resp => console.log(resp) );
    setTimeout( () => {
    this.muestra.forEach( id => {
        this.pokemonS.getPokemon( id ).subscribe( pokemon => this.pokemones.push(pokemon));
      });
    }, 700);
  }

}
