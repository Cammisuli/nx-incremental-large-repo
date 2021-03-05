import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib9component0Component } from './lib5childlib9component0.component';

describe('Lib5childlib9component0Component', () => {
  let component: Lib5childlib9component0Component;
  let fixture: ComponentFixture<Lib5childlib9component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib5childlib9component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib9component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
