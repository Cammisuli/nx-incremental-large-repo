import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20childlib1component0Component } from './lib20childlib1component0.component';

describe('Lib20childlib1component0Component', () => {
  let component: Lib20childlib1component0Component;
  let fixture: ComponentFixture<Lib20childlib1component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib20childlib1component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20childlib1component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
