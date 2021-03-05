import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib30childlib0component0Component } from './lib30childlib0component0.component';

describe('Lib30childlib0component0Component', () => {
  let component: Lib30childlib0component0Component;
  let fixture: ComponentFixture<Lib30childlib0component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib30childlib0component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib30childlib0component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
