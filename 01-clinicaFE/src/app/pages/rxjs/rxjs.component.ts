import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent  implements OnDestroy{

  public intervalSubs: Subscription;

  constructor() {

    this.intervalSubs = this.retornarIntervalo()
        .subscribe( console.log);

    /* this.retornaObservable().pipe(
      retry(1)   // Si da error intenta 1 vez más.
    ).subscribe(
      valor => console.log('Subs: ', valor),
      error => console.warn('Error: ', error),
      () => console.info('Obs Terminada')
    ); */
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornarIntervalo(): Observable<number> {
    return interval(500)
           .pipe(
              map( valor => valor + 1 ),
              filter( valor => (valor % 2 === 0) ? true : false),  // Si no se cumple no sigue
              take(10)                                             // Emito 10 veces
           );
  }

  retornaObservable(): Observable<number> {
    let i = -1;
    return new Observable( observer => {
    const intervalo = setInterval( () => {
        i++;

        if ( i % 2 === 0) {
          observer.next(i);   // Hago un aviso cuando es par el valor.
        }

        if ( i === 10) {
          clearInterval(intervalo);
          observer.complete();   // Termino de forma satisfactoria el proceso.
        }

        if ( i === 4 ) {
          console.log('Dió Error pero por el retry intenta de nuevo.')
          observer.error('i llegó al valor de 7.');  // Termino con un error
        }

      }, 1000)
    });
  }

}
