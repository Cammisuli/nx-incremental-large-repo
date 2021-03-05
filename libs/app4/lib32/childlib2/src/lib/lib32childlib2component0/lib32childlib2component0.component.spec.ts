import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib32childlib2component0Component } from './lib32childlib2component0.component';

describe('Lib32childlib2component0Component', () => {
  let component: Lib32childlib2component0Component;
  let fixture: ComponentFixture<Lib32childlib2component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib32childlib2component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib32childlib2component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
