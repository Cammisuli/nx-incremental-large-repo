import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14childlib1component0Component } from './lib14childlib1component0.component';

describe('Lib14childlib1component0Component', () => {
  let component: Lib14childlib1component0Component;
  let fixture: ComponentFixture<Lib14childlib1component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib14childlib1component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14childlib1component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
