import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18childlib0component0Component } from './lib18childlib0component0.component';

describe('Lib18childlib0component0Component', () => {
  let component: Lib18childlib0component0Component;
  let fixture: ComponentFixture<Lib18childlib0component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib18childlib0component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18childlib0component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
