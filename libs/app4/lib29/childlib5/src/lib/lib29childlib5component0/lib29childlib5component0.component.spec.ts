import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29childlib5component0Component } from './lib29childlib5component0.component';

describe('Lib29childlib5component0Component', () => {
  let component: Lib29childlib5component0Component;
  let fixture: ComponentFixture<Lib29childlib5component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib29childlib5component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29childlib5component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
