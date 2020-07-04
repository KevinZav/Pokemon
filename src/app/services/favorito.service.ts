import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {
  favoritos = [];
  constructor() { }
  getFavoritos() {
    this.favoritos = JSON.parse( localStorage.getItem('favoritos')) || [];
    return this.favoritos;
  }
  agregarFavorito( id: any ) {
    this.favoritos.push(id);
    localStorage.setItem( 'favoritos', JSON.stringify(this.favoritos) );
  }
  eliminarFavorito( id: any ) {
    this.favoritos.forEach( (favorito, idx) => {
      if ( favorito === id ) {
        this.favoritos.splice(idx, 1);
      }
    });
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }
}
