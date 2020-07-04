import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  pokemones: Pokemon[] = [];
  loading = true;
  constructor( private pokemonS: PokemonService, private actRouter: ActivatedRoute ) { }
  ngOnInit(): void {
    this.actRouter.params.subscribe( (resp: any) => {
      const termino = resp.termino;
      const resultadoBusqueda = this.pokemonS.buscar( termino );
      this.pokemones = [];
      setTimeout( () => {
        resultadoBusqueda.forEach( busqueda => {
          this.pokemonS.getPokemon( busqueda.id ).subscribe( pokemon => this.pokemones.push(pokemon));
        });
        this.loading = false;
      }, 700);
    });
  }
}
