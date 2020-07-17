import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;  

  @Input() leyenda: string = 'Leyenda';
  @Input() btnClass: string = 'btn-primary';
  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { 
    // console.log('Leyenda:', this.leyenda);
    // console.log('Porcentaje:', this.porcentaje);
  }
  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  onChange( newValue: number) {

    // let elemHTML: any = document.getElementsByName('porcentaje')[0];
    // console.log(this.txtProgress);

    if ( newValue >= 100 ) {
      this.porcentaje = 100;
    } else if ( newValue <= 0 ) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }

    // elemHTML.value = Number( this.porcentaje );
    this.txtProgress.nativeElement.value = this.porcentaje;

    this.cambioValor.emit(this.porcentaje);
  }

  cambiarValor( valor: number ) {

    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }

    if (this.porcentaje + valor >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }


    if (this.porcentaje + valor <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }

    this.porcentaje = this.porcentaje + valor;
    this.cambioValor.emit(this.porcentaje);
    this.txtProgress.nativeElement.focus();
  }

}
