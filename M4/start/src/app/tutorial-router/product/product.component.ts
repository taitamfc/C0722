import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../product';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute, Params  } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product! : Product;
  formProduct!: FormGroup;
  constructor(
    private _ProductService:ProductService,
    private activatedRouteService: ActivatedRoute,
    ){
  }
  ngOnInit(){
    

    //dùng khi có sự thay đổi trên url
    this.activatedRouteService.params.subscribe(
      (params: Params) => {
        let id = parseInt(params['id']);
        // goi phuong thuc all
        this.product = this._ProductService.find(id);

        // Dua vao form
        console.log(this.product);
        this.formProduct = new FormGroup({
          'name': new FormControl(this.product.name,[
            Validators.required,
            Validators.minLength(5),
          ]),
          'price': new FormControl(this.product.price,[
            Validators.required,
            Validators.minLength(5),
          ]),
        })
      }
    );
    
  }
}
