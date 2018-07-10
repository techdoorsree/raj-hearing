import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HearingaidComponent } from './hearingaid.component';

describe('HearingaidComponent', () => {
  let component: HearingaidComponent;
  let fixture: ComponentFixture<HearingaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HearingaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HearingaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
