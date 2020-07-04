import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { data } from '../data';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url = `https://pokeapi.co/api/v2/pokemon`;
  urlEspecie = `https://pokeapi.co/api/v2/pokemon-species`;
  constructor( private http: HttpClient ) { }
  // tslint:disable-next-line: max-line-length

  statsName = {
    speed: 'Velocidad',
    hp: 'HP',
    attack: 'Ataque',
    defense: 'Defensa',
    'special-attack': 'Super ataque',
    'special-defense': 'Super defensa'
  };
  getPokemon( id: any ) {
    return this.http.get(`${this.url}/${id}`)
              .pipe(
                map( (resp: any) => {
                  const pokemon: Pokemon = {
                    id: resp.id,
                    name: resp.name,
                    img: this.getImagenPokemon( resp.id ),
                    peso: resp.weight / 10,
                    altura: resp.height / 10,
                    stats: this.getStats( resp.stats ),
                    types: this.getTipes( resp.types )
                  };
                  // `${this.urlEspecie}/${resp.name}`
                  this.getDescripcion( id ).subscribe( desc =>  pokemon.descripcion = desc );
                  this.getURLEvolucion( resp.species.url ).subscribe( url => {
                    pokemon.evolucion = url.url;
                    this.getEvoluciones(url.url).subscribe( (ev) => pokemon.evoluciones = ev );
                  } );
                  pokemon.habilidades = [];
                  resp.abilities.forEach( (ab: any) =>  {
                    this.getHabilidad(ab.ability.url).subscribe( (habilidad: any) => pokemon.habilidades.push(habilidad) );
                  });
                  return pokemon;
                })
              );
  }
  getStats( stats: any[] ) {
    const statsPokemon = [];
    stats.forEach( stat => {
      statsPokemon.push({ value: stat.base_stat, name: this.statsName[stat.stat.name] });
    });
    return statsPokemon;
  }
  getImagenPokemon( id: number ) {
    return `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
  }
  getTipes( types: any[] ) {
    const typesPokemon = [];
    types.forEach( type =>  {
      typesPokemon.push( {tipo: type.type.name} );
    });
    return typesPokemon;
  }
  getDescripcion( id: number ) {
      return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
        .pipe(
          map( (resp: any) => {
             let descripcion = '';
             resp.flavor_text_entries.forEach( (desc: any) => {
               if ( desc.language.name === 'es' ) {
                 descripcion = desc.flavor_text;
               }
              });
             return descripcion;
          })
        );
  }
  getURLEvolucion( urlEspecie: string ) {
    return this.http.get(urlEspecie).pipe(
      map( (resp: any) => {
        return resp.evolution_chain || '';
      })
    );
  }
  getEvoluciones( urlEvolucion: string ) {
    return this.http.get(`${urlEvolucion}`).pipe(
      map( (resp: any) => {
        const evoluciones = [];
        evoluciones.push(resp.chain.species.name);
        const chain: any[] = resp.chain.evolves_to;
        chain.forEach( (evolucion: any) => {
          const busqueda = this.buscar(evolucion.species.name)[0].id || evolucion.species.name;
          evoluciones.push(busqueda);
          if ( evolucion.evolves_to ) {
            evolucion.evolves_to.forEach( (reEvolucion: any) => {
              evoluciones.push(reEvolucion.species.name);
            });
          }
        });
        return evoluciones;
      })
    );
  }
  getHabilidad( url: string ) {
    return this.http.get(`${url}`).pipe(
      map( (resp: any) => {
        const descripciones: any[] = resp.flavor_text_entries;
        const nombres: any[] = resp.names;
        const habilidad: any = {};
        descripciones.forEach( descripcion => {
          if (descripcion.language.name === 'es') {
            habilidad.descripcion = descripcion.flavor_text;
          }
          if (descripcion.language.name === 'en') {
            habilidad.descripcion_alterna = descripcion.flavor_text;
          }
        });
        nombres.forEach( (nombre: any) => {
          if ( nombre.language.name === 'es' ) {
            habilidad.nombre = nombre.name;
          }
          if ( nombre.language.name === 'en' ) {
            habilidad.nombre_alterno = nombre.name;
          }
        });
        return habilidad;
      })
    );
  }
  buscar( termino: string ) {
    const resultadoBusqueda = [];
    data.forEach( pokemon => {
      if ( pokemon.name.indexOf(termino) >= 0 ) {
        resultadoBusqueda.push(pokemon);
      }
    });
    return resultadoBusqueda;
  }

}



export interface Pokemon {
  id: number;
  name: string;
  stats?: any[];
  img: string;
  types?: any[];
  peso?: number;
  altura?: number;
  descripcion?: string;
  evolucion?: string;
  evoluciones?: string[];
  habilidades?: any[];
}
