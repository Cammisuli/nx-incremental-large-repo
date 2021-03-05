import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib32childlib9component0Component } from './lib32childlib9component0.component';

describe('Lib32childlib9component0Component', () => {
  let component: Lib32childlib9component0Component;
  let fixture: ComponentFixture<Lib32childlib9component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib32childlib9component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib32childlib9component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
