import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductosService } from 'src/app/services/productos.service';
import { Router } from '@angular/router';
//Para usar Jquery
declare var $: any;
@Component({
  selector: 'app-productos-screen',
  templateUrl: './productos-screen.component.html',
  styleUrls: ['./productos-screen.component.scss'],
})
export class ProductosScreenComponent implements OnInit {
  //Aquí van las variables
  public editar: boolean = false;
  public user: any = {};
  //Para detectar errores
  public errors: any = {};

  constructor(
    private router: Router,
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
    this.errors = this.productosservice.validarProducto(this.user);

    if ($.isEmptyObject(this.errors)) {
      // No hay errores, se registra el producto
      alert('Producto registrado con éxito');
      this.router.navigate(['home']);
    }
    // Si hay errores, no hace nada (los errores se mostrarán en el formulario)
  }
}
