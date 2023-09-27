import { Component, OnInit } from '@angular/core';
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
    this.router.navigate(['registro']);
  }
}
