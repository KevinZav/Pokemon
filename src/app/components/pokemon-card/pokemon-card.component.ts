import { Component, OnInit, Input } from '@angular/core';
import { PokemonService, Pokemon } from '../../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  constructor( private pokemonS: PokemonService, private route: Router ) { }
  @Input() pokemon: Pokemon;
  ngOnInit(): void {
  }
  verPokemon() {
    this.route.navigate(['pokemon', this.pokemon.id]);
  }

}
