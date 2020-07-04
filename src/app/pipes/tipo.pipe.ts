import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipo'
})
export class TipoPipe implements PipeTransform {
  tipos = [{
        clave: 'poison',
        valor: 'veneno',
        dic: 'Veneno'
    },
    {
        clave: 'grass',
        valor: 'planta',
        dic: 'Planta'
    },{
      clave: 'normal',
      valor: 'normal',
      dic: 'Normal'
    },
    {
        clave: 'electric',
        valor: 'electrico',
        dic: 'Eléctrico'
    },
    {
        clave: 'psychic',
        valor: 'psiquico',
        dic: 'Psiquico'
    },
    {
        clave: 'flying',
        valor: 'volador',
        dic: 'Volador'
    },
    {
        clave: 'water',
        valor: 'agua',
        dic: 'Agua'
    },
    {
        clave: 'dragon',
        valor: 'dragon',
        dic: 'Dragón'
    },
    {
        clave: 'ground',
        valor: 'tierra',
        dic: 'Tierra'
    },
    {
        clave: 'ice',
        valor: 'hielo',
        dic: 'Hielo'
    },
    {
        clave: 'fire',
        valor: 'fuego',
        dic: 'Fuego'
    },
    {
        clave: 'steel',
        valor: 'acero',
        dic: 'Acero'
    },
    {
        clave: 'bug',
        valor: 'bicho',
        dic: 'Bicho'
    },
    {
        clave: 'fairy',
        valor: 'hada',
        dic: 'Hada'
    },
    {
        clave: 'fighting',
        valor: 'lucha',
        dic: 'Lucha'
    },
    {
        clave: 'rock',
        valor: 'roca',
        dic: 'Roca'
    },
    {
        clave: 'ghost',
        valor: 'fantasma',
        dic: 'Fantasma'
    },
    {
        clave: 'dark',
        valor: 'oscuro',
        dic: 'Oscuro'
    }
  ];
  transform(tipo: string, peticion?: string) {
    let result = '';
    this.tipos.forEach( t => {
      if (t.clave === tipo) {
        if (peticion === 'class') {
          result = tipo;
        } else if ( peticion === 'traduccion' ) {
          result = t.dic;
        } else {
          result = t.valor;
        }
      }
    });
    return result;
  }

}
