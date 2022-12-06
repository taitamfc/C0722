import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GNgIfComponent } from './g-ng-if.component';

describe('GNgIfComponent', () => {
  let component: GNgIfComponent;
  let fixture: ComponentFixture<GNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GNgIfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
