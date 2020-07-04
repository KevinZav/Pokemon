import { Component, OnInit, Input } from '@angular/core';
import { Pokemon, PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-evolucion',
  templateUrl: './evolucion.component.html',
  styleUrls: ['./evolucion.component.css']
})
export class EvolucionComponent implements OnInit {
  @Input() id: string;
  constructor( private pokemonS: PokemonService ) { }
  pokemon: Pokemon;
  ngOnInit(): void {
    this.pokemonS.getPokemon(this.id).subscribe( resp => this.pokemon = resp );
  }

}
