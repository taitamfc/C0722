import { Component } from '@angular/core';

@Component({
  selector: 'app-k-ng-style',
  templateUrl: './k-ng-style.component.html',
  styleUrls: ['./k-ng-style.component.css']
})
export class KNgStyleComponent {
  setStyles(){
    return {
      'color' : 'red',
      'font-size' : '20px',
    }
  }
}
