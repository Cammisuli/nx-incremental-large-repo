import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29childlib3component1Component } from './lib29childlib3component1.component';

describe('Lib29childlib3component1Component', () => {
  let component: Lib29childlib3component1Component;
  let fixture: ComponentFixture<Lib29childlib3component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib29childlib3component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29childlib3component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
