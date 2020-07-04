

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { CompararComponent } from './pages/comparar/comparar.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'comparar', component: CompararComponent },
  { path: 'pokemon/:id', component: PokemonComponent },
  { path: 'busqueda/:termino', component: BusquedaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const appRouting = RouterModule.forRoot(routes);


