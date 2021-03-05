import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib2component0Component } from './lib5childlib2component0.component';

describe('Lib5childlib2component0Component', () => {
  let component: Lib5childlib2component0Component;
  let fixture: ComponentFixture<Lib5childlib2component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib5childlib2component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib2component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
