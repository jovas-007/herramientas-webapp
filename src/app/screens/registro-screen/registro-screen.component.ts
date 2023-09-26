import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.scss'],
})
export class RegistroScreenComponent implements OnInit {
  public id: number | null = null;
  public name: string = '';
  public email: string = '';
  public password: string = '';
  public confirmPassword: string = '';
  public rfc: string = '';
  public curp: string = '';
  public edad: number | null = null;
  public telefono: string = '';
  public ocupacion: string = '';
  public fechaNacimiento: any = null;

  public editar: boolean = false;
  public user: any = {};

  private readonly MAX_ID_LENGTH = 9;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = this.inicializarUsuario();
    console.log('User: ', this.user);
  }

  public restrictInput(event: any): void {
    const inputValue = event.target.value;
    if (inputValue.length > this.MAX_ID_LENGTH) {
      event.target.value = inputValue.slice(0, this.MAX_ID_LENGTH);
      this.id = event.target.value;
    }
  }

  public changeFecha(event: any) {
    console.log(event);
    console.log(event.value.toISOString());

    this.user.fechaNacimiento = event.value.toISOString().split('T')[0];
    console.log('Fecha: ', this.user.fechaNacimiento);
  }

  public goLogin(): void {
    this.router.navigate(['']);
  }

  public inicializarUsuario() {
    return {
      id: null,
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      fechaNacimiento: '',
      curp: '',
      rfc: '',
      edad: null,
      telefono: '',
      ocupacion: '',
    };
  }

  public isFormValid(): boolean {
    return (
      this.name.trim() !== '' &&
      this.email.trim() !== '' &&
      this.password.trim() !== '' &&
      this.confirmPassword.trim() !== '' &&
      this.rfc.trim() !== '' &&
      this.curp.trim() !== '' &&
      !!this.edad &&
      this.telefono.trim() !== '' &&
      this.ocupacion.trim() !== '' &&
      !!this.fechaNacimiento &&
      this.password === this.confirmPassword
    );
  }

  public cancelRegistration(): void {
    this.router.navigate(['']);
  }
}
