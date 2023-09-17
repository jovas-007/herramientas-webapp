import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.scss'],
})
export class RegistroScreenComponent implements OnInit {
  public name: string = '';
  public email: string = '';
  public password: string = '';
  public confirmPassword: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public goLogin(): void {
    this.router.navigate(['login']);
  }

  public isFormValid(): boolean {
    return (
      this.name.trim() !== '' &&
      this.email.trim() !== '' &&
      this.password.trim() !== '' &&
      this.confirmPassword.trim() !== '' &&
      this.password === this.confirmPassword
    );
  }
}
