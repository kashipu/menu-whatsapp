import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos = [
    {
      id: 1,
      nombre: 'La Argentina',
      descripcion: 'Descripción del producto 1',
      imagen: 'assets/img/laargentina.jpg',
      precio: 23500
    },
    {
      id: 2,
      nombre: 'La Colombiana',
      descripcion: 'Descripción del producto 2',
      imagen: 'assets/img/lacolombiana.jpg',
      precio: 5500
    },
    {
      id: 3,
      nombre: 'La Americana',
      descripcion: 'Descripción del producto 3',
      imagen: 'assets/img/laamericana.jpg',
      precio: 18500
    }
  ];
  constructor() {
    console.log('Servicio listo para usar');
  }
  getProductos() {
    return this.productos;
  }
}
