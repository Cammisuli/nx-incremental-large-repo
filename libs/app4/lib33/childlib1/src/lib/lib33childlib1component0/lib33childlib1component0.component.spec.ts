import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib33childlib1component0Component } from './lib33childlib1component0.component';

describe('Lib33childlib1component0Component', () => {
  let component: Lib33childlib1component0Component;
  let fixture: ComponentFixture<Lib33childlib1component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib33childlib1component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib33childlib1component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
