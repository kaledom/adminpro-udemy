import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { stringify } from 'querystring';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  titulo: string;
  public tituloSubscription: Subscription;

  constructor( private router: Router,
               private title: Title,
               private meta: Meta ) {

    this.tituloSubscription = this.getDataRoute()
                                .subscribe( data => {
                                  console.log(data.titulo);
                                  this.titulo = data.titulo;
                                  this.title.setTitle(this.titulo);
                            
                                  const metaTag: MetaDefinition = {
                                    name: 'description',
                                    content: this.titulo
                                  };
                                  this.meta.updateTag( metaTag );
                                });

  }
  ngOnDestroy(): void {
    this.tituloSubscription.unsubscribe();
  }

  ngOnInit(): void {
  }

  getDataRoute() {
    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd ),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null ),
      map( ( evento: ActivationEnd ) => evento.snapshot.data )
    );
  }

}
