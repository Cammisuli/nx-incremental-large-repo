import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11childlib5component0Component } from './lib11childlib5component0.component';

describe('Lib11childlib5component0Component', () => {
  let component: Lib11childlib5component0Component;
  let fixture: ComponentFixture<Lib11childlib5component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib11childlib5component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11childlib5component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
