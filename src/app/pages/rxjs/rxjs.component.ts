import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { retry, map, filter, take } from 'rxjs/operators';
import { Subscriber, Subscription } from 'rxjs';
import { info } from 'console';



@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {


  subscription: Subscription;
  public intervalSubscription: Subscription;

  constructor() {

    // this.subscription = this.regresaObservable().subscribe(
    //   num => console.log( 'Subs: ', num),
    //   err => console.error( 'Error: ', err ),
    //   () => console.log('Fin de la observación!')
    // );

    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe(
    //   valor => console.log( 'Subs: ', valor ),
    //   error => console.error( 'Error', error ),
    //   () => console.warn('Observable terminado')
    // );

    // this.retornaIntervalo().subscribe(
    //   valor => console.log(valor)
    // );

    //
    this.intervalSubscription = this.retornaIntervalo().subscribe( console.log );

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('La página se va a cerrar');
    this.intervalSubscription.unsubscribe();
    // this.subscription.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {

    return interval(1000)
                        .pipe(
                          // importante el orden porque cambia el valor y se ejecuta secuencial
                          //take(10),
                          map( valor => (valor + 1) ),
                          filter( valor  => (valor % 2 === 0) ? true : false ),
                        );

  }

  retornaObservable(): Observable<number> {
    let i = -1;

    return new Observable<number>( observer => {

      const intervalo = setInterval( () => {

        i++;
        observer.next(i);

        if ( i === 4) {
          clearInterval( intervalo ); // Javascript
          observer.complete();
        }

        if ( i === 2) {
          observer.error('Meeehh!!!');
        }

      }, 1000);
    });

  }

  // ANTIGUO
  // regresaObservable(): Observable<any> {

  //   return new Observable( (observer: Subscriber<any>) => {

  //     let contador = 0;

  //     const interval = setInterval ( () => {

  //       contador += 1;

  //       const salida = {
  //         valor: contador
  //       };

  //       observer.next( salida );

  //       // if ( contador === 4) {
  //       //   clearInterval(interval);
  //       //   observer.complete();
  //       // }

  //       // if ( contador === 2) {
  //       //   console.log('El contador llega a 2');
  //       //   //clearInterval(interval);
  //       //   //observer.error('Se cagó!');
  //       // }

  //     }, 1000);

  //   }).pipe(
  //     map( resp => resp.valor ),
  //     filter( ( valor, index ) => {
  //       //console.log('Filter', valor, index);
  //       if ( (valor % 2) === 1) {
  //         // impar
  //         return true;
  //       } else {
  //         // par
  //         return false;
  //       }
  //     })
  //   );

  // }



}
