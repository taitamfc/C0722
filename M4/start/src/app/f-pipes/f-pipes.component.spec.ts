import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FPipesComponent } from './f-pipes.component';

describe('FPipesComponent', () => {
  let component: FPipesComponent;
  let fixture: ComponentFixture<FPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FPipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
