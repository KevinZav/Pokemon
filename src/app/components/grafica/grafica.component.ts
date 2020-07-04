import { Component, OnInit, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  @Input() data: any[];
  view: any[] = [400, 400];

  // options
  legend = false;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Estadisticas';
  yAxisLabel = 'Puntos';

  colorScheme = 'nightLights';
  constructor() { }

  ngOnInit(): void {
  }
//   onResize(event) {
//     this.view = [event.target.innerWidth / 1.35, 400];
//     const windowsSize = event.target.screen;
//     if (windowsSize.width < 1400) {
//       this.view[0] = 500;
//       this.legend = false;
//     } else {
//       this.view[0] = 650;
//       this.legend = true;
//     }
//      console.log(event.target);
// }
}
