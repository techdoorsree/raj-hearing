import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomevisitComponent } from './homevisit.component';

describe('HomevisitComponent', () => {
  let component: HomevisitComponent;
  let fixture: ComponentFixture<HomevisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomevisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomevisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
