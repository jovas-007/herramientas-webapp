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
  public fechaNacimiento: any = null; // Puedes especificar un tipo más adecuado si lo prefieres

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public restrictInput(event: any): void {
    const inputValue = event.target.value;
    if (inputValue.length > 9) {
      event.target.value = inputValue.slice(0, 9);
      this.id = event.target.value;
    }
  }

  public goLogin(): void {
    this.router.navigate(['']);
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
    // Navega de regreso a la pantalla de login
    this.router.navigate(['']);
  }
}
