import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent implements OnInit {

  porcentaje1: number = 20;
  porcentaje2: number = 35;

  get getPorcentaje1() {
    return `${ this.porcentaje1 }%`;
  }

  get getPorcentaje2() {
    return `${ this.porcentaje2 }%`;
  }

  constructor() { }

  ngOnInit(): void {
  }

  // actualizar( event ) {
  //   console.log('Evento:', event);
  // }

}
