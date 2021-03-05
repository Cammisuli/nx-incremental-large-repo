import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11childlib2component0Component } from './lib11childlib2component0.component';

describe('Lib11childlib2component0Component', () => {
  let component: Lib11childlib2component0Component;
  let fixture: ComponentFixture<Lib11childlib2component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib11childlib2component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11childlib2component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
