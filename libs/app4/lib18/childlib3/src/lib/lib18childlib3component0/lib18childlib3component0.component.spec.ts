import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18childlib3component0Component } from './lib18childlib3component0.component';

describe('Lib18childlib3component0Component', () => {
  let component: Lib18childlib3component0Component;
  let fixture: ComponentFixture<Lib18childlib3component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib18childlib3component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18childlib3component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
