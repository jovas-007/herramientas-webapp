import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacadeService } from 'src/app/services/facade.service';
declare var $: any;
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent implements OnInit {
  //Aquí se definen las variables
  public type: String = 'password';
  public username: String = '';
  public password: String = '';

  public errors: any = {};

  public users_registrados: any = [];
  public logeo: boolean = false;
  public flag_email: boolean = false;
  public flag_pwd: boolean = false;

  constructor(private router: Router, public facadeService: FacadeService) {}

  ngOnInit(): void {}

  //Aquí van las funciones de validación

  public login() {
    //Validar
    this.errors = [];

    this.errors = this.facadeService.validarLogin(this.username, this.password);
    if (!$.isEmptyObject(this.errors)) {
      return false;
    }
    console.log('Pasó validación');

    this.facadeService.login(this.username, this.password).subscribe(
      (response) => {
        console.log(response);
        this.facadeService.saveUserData(response);
        this.router.navigate(['home']);
      },
      (error) => {
        alert('No se pudo iniciar sesión');
      }
    );
  }

  public showPassword() {
    if (this.type == 'password') {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  public goRegistro() {
    this.router.navigate(['registro']);
  }
} //Fin clase

/*import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent implements OnInit {
  public type: string = 'password';
  public username: string = '';
  public password: string = '';
  public errors: any = {};

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public login(): void {
    // Resetear errores para usar varias veces el login
    this.errors = {};
    
    if (this.username !== '' && this.password !== '') {
      this.router.navigate(['home']);
    } 
    else {
      if (this.username === '') {
        this.errors.username = 'Campo requerido';
      }
      if (this.password === '') {
        this.errors.password = 'Campo requerido';
      }
    }
  }

  public showPassword() {
    if (this.type == 'password') {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  public goRegistro(): void {
    this.router.navigate(['productos']);
  }
}
*/
