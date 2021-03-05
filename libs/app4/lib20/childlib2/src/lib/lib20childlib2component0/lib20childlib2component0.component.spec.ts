import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20childlib2component0Component } from './lib20childlib2component0.component';

describe('Lib20childlib2component0Component', () => {
  let component: Lib20childlib2component0Component;
  let fixture: ComponentFixture<Lib20childlib2component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib20childlib2component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20childlib2component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
