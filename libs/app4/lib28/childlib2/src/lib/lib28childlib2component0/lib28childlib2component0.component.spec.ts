import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28childlib2component0Component } from './lib28childlib2component0.component';

describe('Lib28childlib2component0Component', () => {
  let component: Lib28childlib2component0Component;
  let fixture: ComponentFixture<Lib28childlib2component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib28childlib2component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28childlib2component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
