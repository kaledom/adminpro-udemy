import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { retry, map, filter } from 'rxjs/operators';
import { Subscriber, Subscription } from 'rxjs';



@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {


  subscription: Subscription;

  constructor() {

    this.subscription = this.regresaObservable().subscribe(
      num => console.log( 'Subs: ', num),
      err => console.error( 'Error: ', err ),
      () => console.log('Fin de la observación!')
    );

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('La página se va a cerrar');
    this.subscription.unsubscribe();
  }


  regresaObservable(): Observable<any> {
    
    return new Observable( (observer: Subscriber<any>) => {

      let contador = 0;

      const interval = setInterval ( () => {
        
        contador += 1;

        const salida = {
          valor: contador
        };

        observer.next( salida );

        // if ( contador === 4) {
        //   clearInterval(interval);
        //   observer.complete();
        // }

        // if ( contador === 2) {
        //   console.log('El contador llega a 2');
        //   //clearInterval(interval);
        //   //observer.error('Se cagó!');
        // }

      }, 1000);

    }).pipe(
      map( resp => resp.valor ),
      filter( ( valor, index ) => {
        //console.log('Filter', valor, index);
        if ( (valor % 2) === 1) {
          // impar
          return true;
        } else {
          // par
          return false;
        }
      })
    );

  }



}
