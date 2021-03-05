import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib0component0Component } from './lib5childlib0component0.component';

describe('Lib5childlib0component0Component', () => {
  let component: Lib5childlib0component0Component;
  let fixture: ComponentFixture<Lib5childlib0component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib5childlib0component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib0component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
