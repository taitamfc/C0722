import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OOutputComponent } from './o-output.component';

describe('OOutputComponent', () => {
  let component: OOutputComponent;
  let fixture: ComponentFixture<OOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
