import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickADateComponent } from './pick-a-date.component';

describe('PickADateComponent', () => {
  let component: PickADateComponent;
  let fixture: ComponentFixture<PickADateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickADateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickADateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
