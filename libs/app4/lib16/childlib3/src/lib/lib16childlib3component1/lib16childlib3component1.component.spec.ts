import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16childlib3component1Component } from './lib16childlib3component1.component';

describe('Lib16childlib3component1Component', () => {
  let component: Lib16childlib3component1Component;
  let fixture: ComponentFixture<Lib16childlib3component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib16childlib3component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16childlib3component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
