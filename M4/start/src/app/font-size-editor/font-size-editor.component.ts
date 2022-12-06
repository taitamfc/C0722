import { Component } from '@angular/core';

@Component({
  selector: 'app-font-size-editor',
  templateUrl: './font-size-editor.component.html',
  styleUrls: ['./font-size-editor.component.css']
})
export class FontSizeEditorComponent {
  fontSize:any = 14;
  constructor(){
    console.log('constructor');
    
  }
  ngOnChanges(){
    console.log('ngOnChanges');
  } 
  ngOnInit(){
    console.log('ngOnInit');
  }
  ngDoCheck(){
    console.log('ngDoCheck');
  }
  ngAfterContentInit(){

  }
  ngAfterContentChecked(){

  }
  ngAfterViewInit(){

  }

  ngAfterViewChecked(){

  }

  ngOnDestroy(){

  }

  changeFontSize(){
    this.fontSize++;
  }
}
