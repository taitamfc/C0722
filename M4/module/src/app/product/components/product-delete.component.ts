import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-product-delete',
  templateUrl: './../templates/product-delete.component.html',
})
export class ProductDeleteComponent {
  product! : Product;
  id:any = 0;
  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _ProductService:ProductService,
    private _Router: Router
  ) {}
  ngOnInit(){
    // goi phuong thuc all
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      this.product = this._ProductService.find(id);
      
    });
    
  }
  handleDelete(id:any){
    this._ProductService.destroy(id);
    this._Router.navigate(['/products']);
  }
}
