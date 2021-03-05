import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18childlib1component0Component } from './lib18childlib1component0.component';

describe('Lib18childlib1component0Component', () => {
  let component: Lib18childlib1component0Component;
  let fixture: ComponentFixture<Lib18childlib1component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib18childlib1component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18childlib1component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
