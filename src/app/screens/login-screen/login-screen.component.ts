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
  public type: string = 'password';
  public errors: any = {};
  public username: string = '';
  public password: string = '';

  constructor(private router: Router, private facadeService: FacadeService) {}

  ngOnInit(): void {}

  public showPassword() {
    if (this.type == 'password') {
      $('#show-password').addClass('show-password');
      $('#show-password').attr('data-password', true);
      this.type = 'text';
    } else if (this.type == 'text') {
      $('#show-password').removeClass('show-password');
      $('#show-password').attr('data-password', false);
      this.type = 'password';
    }
  }

  //Para ir al registro
  public goRegistro() {
    this.router.navigate(['registro']);
  }

  public login() {
    //Validar
    this.errors = [];

    this.errors = this.facadeService.validarLogin(this.username, this.password);
    if (!$.isEmptyObject(this.errors)) {
      return false;
    }

    this.facadeService.login(this.username, this.password).subscribe(
      (response) => {
        this.facadeService.saveUserData(response);
        this.router.navigate(['home']);
      },
      (error) => {
        alert('No se pudo iniciar sesión');
      }
    );
  }
}
