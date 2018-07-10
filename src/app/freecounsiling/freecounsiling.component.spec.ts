import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreecounsilingComponent } from './freecounsiling.component';

describe('FreecounsilingComponent', () => {
  let component: FreecounsilingComponent;
  let fixture: ComponentFixture<FreecounsilingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreecounsilingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreecounsilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
