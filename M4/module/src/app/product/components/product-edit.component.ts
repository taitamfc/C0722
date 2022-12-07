import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-edit',
  templateUrl: './../templates/product-edit.component.html',
})
export class ProductEditComponent {
  productForm!: FormGroup;
  id:any;
  product!:Product;
  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _ProductService:ProductService,
    private _Router: Router
  ) {}
  ngOnInit(): void {

    //lay id tu url xuong
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      this.product = this._ProductService.find(id);
      this.productForm = new FormGroup({
        name: new FormControl(this.product.name,[
          Validators.required,
          Validators.minLength(3)
        ]),
        price: new FormControl(this.product.price,[
          Validators.required,
          Validators.minLength(3)
        ]),
      });
    });
  }
  handleSubmit():void{
    let productData:Product = {
      name: this.productForm.value.name,
      price: this.productForm.value.price,
      id: 0
    }
    this._ProductService.update(this.id,productData);
    //chuyen huong ve list
    this._Router.navigate(['/']);
  
  }
}
