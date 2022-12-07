import { Component } from '@angular/core';
import { ProductService } from "./../product.service";
import { Product } from "./../product";

@Component({
  selector: 'app-products',
  templateUrl: './../templates/products.component.html',
})
export class ProductsComponent {
  products:Product[] = [];
  constructor(
    private _ProductService:ProductService
  ) { }
  ngOnInit(): void {
    this.products = this._ProductService.getAll();
    console.log(this.products);
  }
}
