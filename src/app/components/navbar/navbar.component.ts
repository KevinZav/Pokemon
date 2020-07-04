import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private route: Router ) { }

  ngOnInit(): void {
  }
  irBusqueda( termino: string ) {
    if (termino.length === 0) { return; }
    this.route.navigate(['busqueda', termino]);
  }
}
