import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  productos: any = [];
  constructor(private productosService: ProductosService) {}
  ngOnInit() {
    this.productos = this.productosService.getProductos();
  }

  buyProduct(producto:any) {
    let textProduct = `
    Mis datos:
    Nombre: Nombre
    Teléfono: Telefono
    Metodo de Pago: Pago
    Tipo de Orden: Domicilio
    Direccion: Dirección
    Complemento: Casa
    ------------------------------------ \n\n
    Deseo Ordenar:
    ${producto.nombre} \n
    ${producto.descripcion} \n
    ${producto.precio} \n
    ------------------------------------ \n\n
    TOTAL DE LA ORDEN: $${producto.precio} \n `;
    window.open(`https://wa.me/573028336170?text=${encodeURI(textProduct)}`)
    console.log("Comprando producto: ", textProduct, encodeURI(textProduct));
  }

}
