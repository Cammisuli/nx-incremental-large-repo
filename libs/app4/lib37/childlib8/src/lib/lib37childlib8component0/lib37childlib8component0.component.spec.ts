import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib37childlib8component0Component } from './lib37childlib8component0.component';

describe('Lib37childlib8component0Component', () => {
  let component: Lib37childlib8component0Component;
  let fixture: ComponentFixture<Lib37childlib8component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib37childlib8component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib37childlib8component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
