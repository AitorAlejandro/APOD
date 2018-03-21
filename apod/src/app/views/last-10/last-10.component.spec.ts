import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Last10Component } from './last-10.component';

describe('Last10Component', () => {
  let component: Last10Component;
  let fixture: ComponentFixture<Last10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Last10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Last10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
