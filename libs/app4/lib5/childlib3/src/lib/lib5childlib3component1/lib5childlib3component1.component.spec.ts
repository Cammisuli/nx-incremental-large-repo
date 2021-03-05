import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib3component1Component } from './lib5childlib3component1.component';

describe('Lib5childlib3component1Component', () => {
  let component: Lib5childlib3component1Component;
  let fixture: ComponentFixture<Lib5childlib3component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib5childlib3component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib3component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
