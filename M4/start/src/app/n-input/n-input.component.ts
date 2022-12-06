import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-n-input',
  templateUrl: './n-input.component.html',
  styleUrls: ['./n-input.component.css']
})
export class NInputComponent   {
  @Input('item') item:string | undefined;
  @Input('name') name:string | undefined;
    ngOnInit():void{
      console.log(this.item);
      
    }

}
