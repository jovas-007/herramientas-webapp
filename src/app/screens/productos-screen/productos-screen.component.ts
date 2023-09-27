import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductosService } from 'src/app/services/productos.service';
declare var $: any;
@Component({
  selector: 'app-productos-screen',
  templateUrl: './productos-screen.component.html',
  styleUrls: ['./productos-screen.component.scss']
})

export class ProductosScreenComponent implements OnInit {
  //Aquí van las variables
  public editar: boolean = false;
  public user: any = {};
  //Para detectar errores
  public errors: any = {};

  constructor(
    private location: Location,
    private productosservice: ProductosService
  ) {}

  ngOnInit(): void {
    this.user = this.productosservice.esquemaproduct();
    console.log('User: ', this.user);
  }

  public regresar() {
    this.location.back();
  }

  //Funciones para password
  public registrar() {
    //Validar
    this.errors = [];

    this.errors = this.productosservice.validarProducto(this.user);
    if (!$.isEmptyObject(this.errors)) {
      //Pasa la validación y sale de la función
      return false;
    }
  }

  
}
