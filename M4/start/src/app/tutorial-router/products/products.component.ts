import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products : Product[] =[];
  constructor(private _ProductService:ProductService){

  }
  ngOnInit(): void{
    // goi phuong thuc all
    let items = this._ProductService.all();
    this.products = items;
    console.log(this.products);
    
  }
}
