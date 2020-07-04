import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { HomeComponent } from './pages/home/home.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { CompararComponent } from './pages/comparar/comparar.component';

// Importaciones
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Rutas
import { appRouting } from './app.routes';

// Pipes
import { TipoPipe } from './pipes/tipo.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { GraficaComponent } from './components/grafica/grafica.component';
import { EvolucionComponent } from './components/evolucion/evolucion.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokemonCardComponent,
    HomeComponent,
    FavoritosComponent,
    CompararComponent,
    TipoPipe,
    LoadingComponent,
    PokemonComponent,
    GraficaComponent,
    EvolucionComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
