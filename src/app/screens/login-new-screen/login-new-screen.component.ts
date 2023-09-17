import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-new-screen',
  templateUrl: './login-new-screen.component.html',
  styleUrls: ['./login-new-screen.component.scss'],
})
export class LoginNewScreenComponent implements OnInit {
  public type: string = 'password';
  public username: string = '';
  public password: string = '';
  public errors: any = {};

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public login(): void {
    // Resetear errores para usar varias veces el login
    this.errors = {};
    ///Es mejor usar la validacion triple en vez de la doble, comparaciones estrictas ===  !==
    ///solo hay que usar la doble cuando se quiere comparar con null o undefined, <= >= < >
    if (this.username !== '' && this.password !== '') {
      this.router.navigate(['home']);
    } else {
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
    this.router.navigate(['registro']);
  }
}
