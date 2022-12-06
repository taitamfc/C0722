import { Component } from '@angular/core';

@Component({
  selector: 'app-d-event',
  templateUrl: './d-event.component.html',
  styleUrls: ['./d-event.component.css']
})
export class DEventComponent {
  clickMe1(number:any):void{
    alert(number);
  } 
  clickMe2():void{
    alert('clickMe2');
  } 
}
