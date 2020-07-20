import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  // ajustes: Ajustes = {
  //   temaUrl: 'assets/css/colors/default-dark.css',
  //   tema: 'default-dark'
  // }

  constructor( @Inject(DOCUMENT) private _document, ) {

    // Nuevo
    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
    this.linkTheme.setAttribute('href', url);

    // Antiguo
    // this.cargarAjustes();
  }

  // NUEVO
  changeTheme( theme: string ) {

    const url = `./assets/css/colors/${ theme }.css`;

    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();

  }

  checkCurrentTheme() {

    const links = document.querySelectorAll('.selector');

    links.forEach( elem => {

      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentThemeUrl = this.linkTheme.getAttribute('href');

      if (btnThemeUrl === currentThemeUrl) {
        elem.classList.add('working');
      }

    });

  }

//   // ANTIGUO
//   guardarAjustes() {
//     localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
//     // console.log('Guardando en LocalStorage');
//   }

//   cargarAjustes() {
//     if ( localStorage.getItem('ajustes') ) {
//       this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
//       // console.log('Cargando de LocalStorage');
//       this.aplicarAjustes( this.ajustes.tema );
//     } else {
//       // console.log('Usando valores por defecto');
//       this.aplicarAjustes( this.ajustes.tema );
//     }
//   }

//   aplicarAjustes( tema: string ) {

//     let url = `assets/css/colors/${tema}.css`
//     this._document.getElementById('theme').setAttribute('href', url);

//     this.ajustes.tema = tema;
//     this.ajustes.temaUrl = url;

//     this.guardarAjustes();

//   }

}

// interface Ajustes {
//   temaUrl: string;
//   tema: string;
// }
