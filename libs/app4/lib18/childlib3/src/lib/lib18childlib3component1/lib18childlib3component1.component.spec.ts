import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18childlib3component1Component } from './lib18childlib3component1.component';

describe('Lib18childlib3component1Component', () => {
  let component: Lib18childlib3component1Component;
  let fixture: ComponentFixture<Lib18childlib3component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib18childlib3component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18childlib3component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
