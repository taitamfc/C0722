import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HNgForComponent } from './h-ng-for.component';

describe('HNgForComponent', () => {
  let component: HNgForComponent;
  let fixture: ComponentFixture<HNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HNgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
