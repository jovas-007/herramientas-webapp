import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.scss']
})
export class RegistroScreenComponent implements OnInit {

  //Aquí van las variables
  public editar:boolean = false;
  public user: any = {};

  constructor(
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.user = this.esquemaUser();
    console.log("User: ", this.user);
    
  }

  public regresar(){
    this.location.back();
  }

  public esquemaUser(){
    return {
      'matricula': '',
      'first_name': '',
      'last_name': '',
      'email': '',
      'password': '',
      'confirmar_password': '',
      'fecha_nacimiento': '',
      'curp': '',
      'rfc': '',
      'edad': '',
      'telefono': '',
      'ocupacion': '',
    }
  }

}
