import { Injectable } from '@angular/core';
import { ValidatorService } from './tools/validator.service';
import { ErrorsService } from './tools/errors.service';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(
    private validatorService: ValidatorService,
    private errorService: ErrorsService
  ) {}

  public esquemaproduct() {
    return {
      id: '',
      nombre: '',
      precio: '',
      departamento: '',
    };
  }

  //Función para validar datos del producto
  public validarProducto(data: any) {
    console.log('Validando producto... ', data);
    let error: any = [];

    if (!this.validatorService.required(data['id'])) {
      error['id'] = this.errorService.required;
    } else if (!this.validatorService.numeric(data['id'])) {
      alert('El formato de ID es solo números');
    }

    if (!this.validatorService.required(data['nombre'])) {
      error['nombre'] = this.errorService.required;
    } else if (!this.validatorService.min(data['nombre'], 3)) {
      error['nombre'] = this.errorService.min(3);
      alert('La longitud de caracteres del Nombre es menor, deben ser 3 Minimo');
    } else if (!this.validatorService.max(data['nombre'], 20)) {
      error['nombre'] = this.errorService.max(20);
      alert(
        'La longitud de caracteres del Nombre del producto deben ser Máximo 20'
      );
    }

    if (!this.validatorService.required(data['departamento'])) {
      error['departamento'] = this.errorService.required;
    } else if (!this.validatorService.min(data['departamento'], 3)) {
      error['departamento'] = this.errorService.min(3);
      alert(
        'La longitud de caracteres de la departamento es menor, deben ser 3 Minimo'
      );
    } else if (!this.validatorService.max(data['nombre'], 20)) {
      error['departamento'] = this.errorService.max(20);
      alert(
        'La longitud de caracteres del departamento deben ser Máximo 20'
      );
    }

    if (!this.validatorService.required(data['precio'])) {
      error['precio'] = this.errorService.required;
    } else if (!this.validatorService.numeric(data['precio'])) {
      alert('El formato de Precio es solo números');
    }

    return error;
  }
}
