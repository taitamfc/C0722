import { ComponentFixture, TestBed } from '@angular/core/testing';

import { INgSwitchComponent } from './i-ng-switch.component';

describe('INgSwitchComponent', () => {
  let component: INgSwitchComponent;
  let fixture: ComponentFixture<INgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ INgSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(INgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
