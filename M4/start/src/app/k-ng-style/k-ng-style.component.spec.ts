import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KNgStyleComponent } from './k-ng-style.component';

describe('KNgStyleComponent', () => {
  let component: KNgStyleComponent;
  let fixture: ComponentFixture<KNgStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KNgStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
