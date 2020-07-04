import { Component, OnInit, OnChanges } from '@angular/core';
import { PokemonService, Pokemon } from '../../services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FavoritoService } from '../../services/favorito.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor( private pokemonS: PokemonService, private actR: ActivatedRoute,
               private route: Router, private favoritoS: FavoritoService ) { }
  pokemon: Pokemon;
  evoluciones: Pokemon[] = [];
  esFavorito = false;
  ngOnInit(): void {
    this.actR.params.subscribe( (resp) => {
      const id = resp.id;
      this.esFavorito = false;
      this.pokemonS.getPokemon( id ).subscribe( (pokemon: Pokemon) => {
        this.pokemon = pokemon;
        this.verificarFavorito( pokemon.id );
      });
    });
  }
  verificarFavorito( id: any ) {
    const favoritos = this.favoritoS.getFavoritos();
    favoritos.forEach( fav => {
      if (fav === id) {
        this.esFavorito = true;
      }
    });
  }
  getEvoluciones( evoluciones: string[] ) {
    evoluciones.forEach( evolucion => {
      this.pokemonS.getPokemon(evolucion).subscribe( pokemon => { this.evoluciones.push(pokemon); });
    });
  }
  verPokemon( id: string ) {
    this.route.navigate(['pokemon', id]);
    window.scrollTo(0, 0);
  }
  cambiarFavorito() {

    if (this.esFavorito) {
      this.favoritoS.eliminarFavorito( this.pokemon.id );
    } else {
      this.favoritoS.agregarFavorito( this.pokemon.id );
    }
    this.esFavorito = !this.esFavorito;
  }

}
