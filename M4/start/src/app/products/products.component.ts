import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:Product[]=[];
  constructor(
    private _ProductService:ProductService
  ){

  }
  ngOnInit(){
    // Goi phuong thuc all cua servcie
    let items = this._ProductService.all();
    this.products = items;
    console.log(items);
    
    // Goi phuong thuc find cua servcie
    let item = this._ProductService.find(0);
    console.log(item);
    
    // Goi phuong thuc store cua servcie
    let newProduct : Product = {
      id: 2,
      name:'phi',
      price:20
    }

    this._ProductService.store(newProduct)
     items = this._ProductService.all();
    console.log(items);
    //Goi phuong thuc update cua servcie
    let updateProduct : Product = {
      id: 2,
      name:'thang',
      price:2088
    }
    this._ProductService.update(2,updateProduct)
    items = this._ProductService.all();
    console.log(items);
    //Goi phuong thuc destroy cua servcie
    this._ProductService.destroy(2);
    items = this._ProductService.all();
    console.log(items);
  }

}
