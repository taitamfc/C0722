import { Component } from '@angular/core';

@Component({
  selector: 'app-j-ng-class',
  templateUrl: './j-ng-class.component.html',
  styleUrls: ['./j-ng-class.component.css']
})
export class JNgClassComponent {
  isDanger:boolean =true;
  setClasses(){
    return {
      'btn-info': true,
      'btn-danger':false,  
    }
  }
}
