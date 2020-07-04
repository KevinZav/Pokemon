import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-comparar',
  templateUrl: './comparar.component.html',
  styleUrls: ['./comparar.component.css']
})
export class CompararComponent implements OnInit {

  constructor( private pokemonS: PokemonService ) { }
  busqueda = [];
  data = [];
  pokemones = [];
  ngOnInit(): void {
  }
  buscar( f: any ) {
    const busqueda = f.value;
    this.busqueda = this.pokemonS.buscar( busqueda ).slice(0, 7);
    f.value = '';
  }
  agregar( id: any ) {
    this.busqueda = [];
    const auxData = [...this.data];
    this.data = [];
    this.pokemonS.getPokemon( id.id ).subscribe( resp => {
      this.pokemones.push( resp );
      auxData.push({
        name: resp.name.toUpperCase(),
        series: resp.stats
      });
      this.data = auxData;
    });
  }

}
