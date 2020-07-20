import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'dns';

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

    const promesa = new Promise( ( resolve, reject ) => {
      console.log('dentro de la promesa');
      if (true) {
        resolve('Resolución de la promesa');
      } else {
        reject('Algo salió mal');
      }

    });

    promesa.then( ( mensaje ) => {
      console.log( mensaje );
    })
    .catch( error => console.log('Error en mi promesa:', error) );

    // this.getUsuarios();
    this.getUsuarios().then( usuarios => {
      console.log( usuarios );
    });
      
    console.log('Fin del init');

    
  }

  getUsuarios() {

    const promesa = new Promise( resolve => {
      fetch('https://reqres.in/api/users')
      .then( resp => resp.json() )
      .then( body => console.log(body.data));

    });

    return promesa;
    
    
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
