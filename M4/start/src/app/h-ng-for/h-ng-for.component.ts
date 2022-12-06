import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-h-ng-for',
  templateUrl: './h-ng-for.component.html',
  styleUrls: ['./h-ng-for.component.css']
})
export class HNgForComponent {
  books : any [] = [
    'văn',
    'su',
    'dia'
  ];
  numbers: any[] = [];
  constructor(){ }
  ngOnInit(){
    for (let index = 1; index <= 100; index++) {
      this.numbers.push(index);
    }
  }
}
