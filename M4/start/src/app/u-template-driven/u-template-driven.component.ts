import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-u-template-driven',
  templateUrl: './u-template-driven.component.html',
  styleUrls: ['./u-template-driven.component.css']
})
export class UTemplateDrivenComponent {
  onSubmit(value:any){
    console.log(value);
    // 
  }
  onResetform(formProfile : NgForm){
    console.log(formProfile)
    formProfile.reset();
  }
 
}
