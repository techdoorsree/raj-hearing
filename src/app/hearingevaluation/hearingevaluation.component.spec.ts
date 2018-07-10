import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HearingevaluationComponent } from './hearingevaluation.component';

describe('HearingevaluationComponent', () => {
  let component: HearingevaluationComponent;
  let fixture: ComponentFixture<HearingevaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HearingevaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HearingevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
