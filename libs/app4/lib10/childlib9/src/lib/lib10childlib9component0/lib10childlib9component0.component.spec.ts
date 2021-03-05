import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10childlib9component0Component } from './lib10childlib9component0.component';

describe('Lib10childlib9component0Component', () => {
  let component: Lib10childlib9component0Component;
  let fixture: ComponentFixture<Lib10childlib9component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib10childlib9component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10childlib9component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
