import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10childlib0component0Component } from './lib10childlib0component0.component';

describe('Lib10childlib0component0Component', () => {
  let component: Lib10childlib0component0Component;
  let fixture: ComponentFixture<Lib10childlib0component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib10childlib0component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10childlib0component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
