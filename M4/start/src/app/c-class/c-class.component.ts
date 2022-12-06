import { Component } from '@angular/core';

@Component({
  selector: 'app-c-class',
  templateUrl: './c-class.component.html',
  styleUrls: ['./c-class.component.css']
})
export class CClassComponent {
  onSale:boolean = true;
  clasEx:Array<string> = ['class1','class2']
  actionName:string ='add'
  exColor:string = 'red'
  isDanger:boolean = false;
}
