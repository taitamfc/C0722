import { Injectable } from '@angular/core';
import { Product } from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  store(productData: Product) {
    throw new Error('Method not implemented.');
  }

  products: Product[] = [];
  constructor() {
    this.products = [
      {
        id:1,
        name:'Iphone 7',
        price:20000
      },
      {
        id:2,
        name:'Iphone 8',
        price:20000
      },
      {
        id:3,
        name:'Iphone 9',
        price:20000
      }
    ];
  }
  getAll(): Product[]{
    return this.products;
  }
  find(idx:any): Product{
    return this.products[idx];
  }
  save(product:Product){
    this.products.push(product);
  }
  update(idx:number,product:Product){
    this.products[idx] = product;
  }
  destroy(idx:number){
    this.products.splice(idx,1);
  }

}
