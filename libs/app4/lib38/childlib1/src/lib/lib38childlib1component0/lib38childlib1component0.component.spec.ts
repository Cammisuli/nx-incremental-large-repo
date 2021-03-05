import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib38childlib1component0Component } from './lib38childlib1component0.component';

describe('Lib38childlib1component0Component', () => {
  let component: Lib38childlib1component0Component;
  let fixture: ComponentFixture<Lib38childlib1component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib38childlib1component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib38childlib1component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
