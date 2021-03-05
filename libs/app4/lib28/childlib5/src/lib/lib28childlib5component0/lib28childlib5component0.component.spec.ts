import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28childlib5component0Component } from './lib28childlib5component0.component';

describe('Lib28childlib5component0Component', () => {
  let component: Lib28childlib5component0Component;
  let fixture: ComponentFixture<Lib28childlib5component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib28childlib5component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28childlib5component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
