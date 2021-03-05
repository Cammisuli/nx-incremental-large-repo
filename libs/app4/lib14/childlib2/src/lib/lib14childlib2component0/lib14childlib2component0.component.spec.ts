import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14childlib2component0Component } from './lib14childlib2component0.component';

describe('Lib14childlib2component0Component', () => {
  let component: Lib14childlib2component0Component;
  let fixture: ComponentFixture<Lib14childlib2component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib14childlib2component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14childlib2component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
