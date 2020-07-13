import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() {
    
    

    this.contarTresSegundos().then(
      () => console.log('Terminó!')
    ).catch ( error => console.error('Error en la promesa', error) );

  }

  ngOnInit(): void {
  }

  contarTresSegundos(): Promise<boolean> {

    return new Promise( (resolve, reject) => {

      let contador = 0;

      let intervalo = setInterval( () => {

        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve(true);
          clearInterval(intervalo);
        }

      }, 1000);

    });

  }

}
