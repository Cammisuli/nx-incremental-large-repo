import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29childlib2component0Component } from './lib29childlib2component0.component';

describe('Lib29childlib2component0Component', () => {
  let component: Lib29childlib2component0Component;
  let fixture: ComponentFixture<Lib29childlib2component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib29childlib2component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29childlib2component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
