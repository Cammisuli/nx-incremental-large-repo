import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib33childlib5component0Component } from './lib33childlib5component0.component';

describe('Lib33childlib5component0Component', () => {
  let component: Lib33childlib5component0Component;
  let fixture: ComponentFixture<Lib33childlib5component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib33childlib5component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib33childlib5component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
