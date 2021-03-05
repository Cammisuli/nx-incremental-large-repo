import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib5component0Component } from './lib5childlib5component0.component';

describe('Lib5childlib5component0Component', () => {
  let component: Lib5childlib5component0Component;
  let fixture: ComponentFixture<Lib5childlib5component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib5childlib5component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib5component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
