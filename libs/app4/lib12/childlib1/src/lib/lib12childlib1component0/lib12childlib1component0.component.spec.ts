import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12childlib1component0Component } from './lib12childlib1component0.component';

describe('Lib12childlib1component0Component', () => {
  let component: Lib12childlib1component0Component;
  let fixture: ComponentFixture<Lib12childlib1component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib12childlib1component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12childlib1component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
