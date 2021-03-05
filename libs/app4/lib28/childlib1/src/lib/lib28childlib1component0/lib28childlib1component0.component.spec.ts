import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28childlib1component0Component } from './lib28childlib1component0.component';

describe('Lib28childlib1component0Component', () => {
  let component: Lib28childlib1component0Component;
  let fixture: ComponentFixture<Lib28childlib1component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib28childlib1component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28childlib1component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
