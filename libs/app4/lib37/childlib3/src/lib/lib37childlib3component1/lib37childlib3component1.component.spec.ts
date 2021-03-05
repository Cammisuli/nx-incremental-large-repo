import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib37childlib3component1Component } from './lib37childlib3component1.component';

describe('Lib37childlib3component1Component', () => {
  let component: Lib37childlib3component1Component;
  let fixture: ComponentFixture<Lib37childlib3component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib37childlib3component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib37childlib3component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
