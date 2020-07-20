import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {


  constructor( private settingsService: SettingsService ) {}

  ngOnInit(): void {
    // NUEVO
    this.settingsService.checkCurrentTheme();
    // ANTIGUO
    // this.colocarClaseSeleccionada();
  }

  // NUEVO
  changeTheme( theme: string ) {

    this.settingsService.changeTheme( theme );

  }



  // // ANTIGUO

  // cambiarColor(tema:string, link: any) {
  //   this.aplicarClaseSeleccionada( link );

  //   this._ajustes.aplicarAjustes( tema );
  // }

  // aplicarClaseSeleccionada( link: any ) {
  //   let selectores: any = document.getElementsByClassName('selector');
  //   for ( let ref of selectores  ) {
  //     ref.classList.remove('working');
  //   }
  //   link.classList.add('working');
  // }

  // colocarClaseSeleccionada() {
  //   let selectores: any = document.getElementsByClassName('selector');
  //   let tema = this._ajustes.ajustes.tema;

  //   for ( let ref of selectores  ) {
  //     if ( ref.getAttribute('data-theme') === tema) {
  //       ref.classList.add('working');
  //       break;
  //     }
  //   }
  // }

}
