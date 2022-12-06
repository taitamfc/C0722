import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { BPropertyComponent } from './b-property/b-property.component';
import { CClassComponent } from './c-class/c-class.component';
import { DEventComponent } from './d-event/d-event.component';
import { ETwoWayComponent } from './e-two-way/e-two-way.component';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from './custom.pipe';
import { FPipesComponent } from './f-pipes/f-pipes.component';
import { GNgIfComponent } from './g-ng-if/g-ng-if.component';
import { HNgForComponent } from './h-ng-for/h-ng-for.component';
import { INgSwitchComponent } from './i-ng-switch/i-ng-switch.component';
import { JNgClassComponent } from './j-ng-class/j-ng-class.component';
import { KNgStyleComponent } from './k-ng-style/k-ng-style.component';
import { NInputComponent } from './n-input/n-input.component';
import { OOutputComponent } from './o-output/o-output.component';
import { GameNumbersComponent } from './game-numbers/game-numbers.component';
import { UTemplateDrivenComponent } from './u-template-driven/u-template-driven.component';
import { VDataDrivenComponent } from './v-data-driven/v-data-driven.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './tutorial-router/products/products.component';
import { ProductComponent } from './tutorial-router/product/product.component';
import { ProductEditComponent } from './tutorial-router/product-edit/product-edit.component';
import { ProductAddComponent } from './tutorial-router/product-add/product-add.component';
import { ProductDeleteComponent } from './tutorial-router/product-delete/product-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    BPropertyComponent,
    CClassComponent,
    DEventComponent,
    ETwoWayComponent,
    CustomPipe,
    FPipesComponent,
    GNgIfComponent,
    HNgForComponent,
    INgSwitchComponent,
    JNgClassComponent,
    KNgStyleComponent,
    NInputComponent,
    OOutputComponent,
    GameNumbersComponent,
    UTemplateDrivenComponent,
    VDataDrivenComponent,
    ProductsComponent,
    ProductComponent,
    ProductEditComponent,
    ProductAddComponent,
    ProductDeleteComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
