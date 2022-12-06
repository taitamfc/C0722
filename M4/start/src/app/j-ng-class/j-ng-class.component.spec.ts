import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JNgClassComponent } from './j-ng-class.component';

describe('JNgClassComponent', () => {
  let component: JNgClassComponent;
  let fixture: ComponentFixture<JNgClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JNgClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
