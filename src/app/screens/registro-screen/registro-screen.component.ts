import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.scss']
})
export class RegistroScreenComponent implements OnInit {

  //Aquí van las variables
  public editar:boolean = false;
  public user: any = {};
  public array_user: any[] = [];
  //Para contraseñas
  public hide_1: boolean = false;
  public hide_2: boolean = false;
  public inputType_1: string = 'password';
  public inputType_2: string = 'password';
  //Para detectar errores
  public errors:any ={};


  constructor(
    private location: Location,
    private usuariosService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.usuariosService.esquemaUser();
    console.log("User: ", this.user);
    
  }

  public regresar(){
    this.location.back();
  }

  //Funciones para password
  showPassword()
  {
    if(this.inputType_1 == 'password'){
      this.inputType_1 = 'text';
      this.hide_1 = true;
    }
    else{
      this.inputType_1 = 'password';
      this.hide_1 = false;
    }
  }

  showPwdConfirmar()
  {
    if(this.inputType_2 == 'password'){
      this.inputType_2 = 'text';
      this.hide_2 = true;
    }
    else{
      this.inputType_2 = 'password';
      this.hide_2 = false;
    }
  }

  public registrar(){
    //Validar
    this.errors = [];

    this.errors = this.usuariosService.validarUsuario(this.user);
    if(!$.isEmptyObject(this.errors)){
      //Pasa la validación y sale de la función
      return false;
    }
    //Valida la contraseña
    if(this.user.password == this.user.confirmar_password){
      //Funcion para registrarse - llamada al servicio
      this.usuariosService.registrarUsuario(this.user).subscribe(
        (response)=>{
          alert("Usuario registrado correctamente");
          console.log("Usuario registrado: ", response);
          this.router.navigate(["/"]);
        }, (error)=>{
          alert("No se pudo registrar usuario");
          console.log(error);
        }
      );
    }else{
      alert("Las contraseñas no coinciden");
      this.user.password="";
      this.user.confirmar_password="";
    }
  }

  //Función para detectar el cambio de fecha
  //Para la fecha
  public changeFecha(event :any){
    console.log(event);
    console.log(event.value.toISOString());
    
    this.user.fecha_nacimiento = event.value.toISOString().split("T")[0];
    console.log("Fecha: ", this.user.fecha_nacimiento);
  }

}

/*
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UsuariosService } from 'src/app/services/usuarios.service';
declare var $: any;


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
  public confirmar_password: string = '';
  public rfc: string = '';
  public curp: string = '';
  public edad: number | null = null;
  public telefono: string = '';
  public ocupacion: string = '';
  public fechaNacimiento: any = null;

  public editar: boolean = false;
  public user: any = {};

  private readonly MAX_ID_LENGTH = 9;

  //Para detectar errores
  public errors: any = {};

  constructor(private location: Location,
    private usuariosService: UsuariosService
    , private router: Router) { }

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

  public inicializarUsuario() {
    return {
      id: null,
      name: '',
      email: '',
      password: '',
      confirmar_password: '',
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
      this.confirmar_password.trim() !== '' &&
      this.rfc.trim() !== '' &&
      this.curp.trim() !== '' &&
      !!this.edad &&
      this.telefono.trim() !== '' &&
      this.ocupacion.trim() !== '' &&
      !!this.fechaNacimiento &&
      this.password === this.confirmar_password
    );
  }

  public cancelRegistration(): void {
    this.router.navigate(['']);
  }

  public registrar() {
    //Validar
    this.errors = [];

    this.errors = this.usuariosService.validarUsuario(this.user);
    if (!$.isEmptyObject(this.errors)) {
      //Pasa la validación y sale de la función
      return false;
    }
    //Valida la contraseña
    if (this.user.password == this.user.confirmar_password) {
      //Funcion para registrarse
      alert('Todo chido vamos a registrar');
    } else {
      alert('Las contraseñas no coinciden');
      this.user.password = '';
      this.user.confirmar_password = '';
    }
  }


  public validarUsuario(): void {
    // Resetear errores para usar varias veces el login
    this.errors = {};

    if (this.name !== '' && this.email !== '' && this.password !== '' && this.confirmar_password !== '' && this.rfc !== '' && this.curp !== '' && this.edad !== null && this.telefono !== '' && this.ocupacion !== '' && this.fechaNacimiento !== null) {
      //Funcion para registrarse
      alert('Todo chido vamos a registrar');
      this.router.navigate(['home']);
    } else {
      alert('Hay errores en el formulario');
      ///Es mejor usar la validacion triple en vez de la doble, comparaciones estrictas ===  !==
      ///solo hay que usar la doble cuando se quiere comparar con null o undefined, <= >= < >
      if (this.name.trim() === '') {
        this.errors.name = 'Campo requerido';
      }
      if (this.email.trim() === '') {
        this.errors.email = 'Campo requerido';
      }
      if (this.password.trim() === '') {
        this.errors.password = 'Campo requerido';
      }
      if (this.confirmar_password.trim() === '') {
        this.errors.confirmar_password = 'Campo requerido';
      }
      if (this.rfc.trim() === '') {
        this.errors.rfc = 'Campo requerido';
      }
      if (this.curp.trim() === '') {
        this.errors.curp = 'Campo requerido';
      }
      if (this.edad === null) {
        this.errors.edad = 'Campo requerido';
      }
      if (this.telefono.trim() === '') {
        this.errors.telefono = 'Campo requerido';
      }
      if (this.ocupacion.trim() === '') {
        this.errors.ocupacion = 'Campo requerido';
      }
      if (this.fechaNacimiento === null) {
        this.errors.fechaNacimiento = 'Campo requerido';
      }
      if (this.password !== '' && this.confirmar_password !== '') {
        if (this.password !== this.confirmar_password) {
          this.errors.password = 'Las contraseñas no coinciden';
          this.errors.confirmar_password = 'Las contraseñas no coinciden';
        }
      }
    }
  }
}
*/