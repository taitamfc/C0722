import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-o-output',
  templateUrl: './o-output.component.html',
  styleUrls: ['./o-output.component.css']
})
export class OOutputComponent {
  // Buoc 1
  @Output() gate_1 = new EventEmitter<any>(); 

  conClick(){
    // Buoc 2
    this.gate_1.emit();
  }
}
