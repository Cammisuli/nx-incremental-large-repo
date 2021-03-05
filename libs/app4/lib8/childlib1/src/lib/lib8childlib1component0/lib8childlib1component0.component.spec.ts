import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib1component0Component } from './lib8childlib1component0.component';

describe('Lib8childlib1component0Component', () => {
  let component: Lib8childlib1component0Component;
  let fixture: ComponentFixture<Lib8childlib1component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib8childlib1component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib1component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
