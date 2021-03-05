import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29childlib9component0Component } from './lib29childlib9component0.component';

describe('Lib29childlib9component0Component', () => {
  let component: Lib29childlib9component0Component;
  let fixture: ComponentFixture<Lib29childlib9component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib29childlib9component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29childlib9component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
