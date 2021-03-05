import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11childlib1component0Component } from './lib11childlib1component0.component';

describe('Lib11childlib1component0Component', () => {
  let component: Lib11childlib1component0Component;
  let fixture: ComponentFixture<Lib11childlib1component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib11childlib1component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11childlib1component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
