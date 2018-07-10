import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoldplugsComponent } from './moldplugs.component';

describe('MoldplugsComponent', () => {
  let component: MoldplugsComponent;
  let fixture: ComponentFixture<MoldplugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoldplugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoldplugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
