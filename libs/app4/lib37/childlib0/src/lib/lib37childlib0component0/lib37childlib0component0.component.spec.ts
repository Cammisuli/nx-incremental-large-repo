import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib37childlib0component0Component } from './lib37childlib0component0.component';

describe('Lib37childlib0component0Component', () => {
  let component: Lib37childlib0component0Component;
  let fixture: ComponentFixture<Lib37childlib0component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib37childlib0component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib37childlib0component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
