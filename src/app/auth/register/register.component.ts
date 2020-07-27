import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'

import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  public formSubmitted = false;

  public registerForm = this.fb.group ({
    nombre: ['Luis', [ Validators.required, Validators.minLength(3) ]],
    email: ['kaledom86@gmail.com', [ Validators.required, Validators.email ] ],
    password: ['123456', Validators.required ],
    password2: ['123456', Validators.required ],
    terminos: [ true, Validators.required ],
  }, {
    validators: this.passwordsIguales('password', 'password2')
  });

  constructor( private fb: FormBuilder,
               private usuarioService: UsuarioService,
               private router: Router) { }

  crearUsuario() {

    this.formSubmitted = true;
    console.log(this.registerForm.value);

    if ( this.registerForm.invalid ) {
      return;
    }

    // realizar el posteo/creación de usuario
    this.usuarioService.crearUsuario( this.registerForm.value )
      .subscribe( resp => {

        // Navegar al Dashboard
        this.router.navigateByUrl('/dashboard');

      }, (err) => {
        // Si sucede un error
        Swal.fire('Error', err.error.msg, 'error');
      } );


  }

  campoNoValido( campo: string ): boolean {
    if ( this.registerForm.get(campo).invalid && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }
  }

  passwordMatchingProblem(): boolean {

    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;

    if ( (pass1 !== pass2) && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }
  }

  passwordsIguales(pass1Name: string, pass2Name: string) {

    return ( formGroup: FormGroup) => {

      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if ( pass1Control.value === pass2Control.value ) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noEsIgual: true });
      }
    };
  }

  aceptaTerminos(): boolean {

    return (!this.registerForm.get('terminos').value && this.formSubmitted);

  }

}