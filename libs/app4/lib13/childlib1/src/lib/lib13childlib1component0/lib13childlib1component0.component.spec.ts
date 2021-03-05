import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13childlib1component0Component } from './lib13childlib1component0.component';

describe('Lib13childlib1component0Component', () => {
  let component: Lib13childlib1component0Component;
  let fixture: ComponentFixture<Lib13childlib1component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib13childlib1component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13childlib1component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
