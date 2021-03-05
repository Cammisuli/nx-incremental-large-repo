import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib1component0Component } from './lib6childlib1component0.component';

describe('Lib6childlib1component0Component', () => {
  let component: Lib6childlib1component0Component;
  let fixture: ComponentFixture<Lib6childlib1component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib6childlib1component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib1component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
