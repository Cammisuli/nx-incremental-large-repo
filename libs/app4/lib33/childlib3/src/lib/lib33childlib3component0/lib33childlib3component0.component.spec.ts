import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib33childlib3component0Component } from './lib33childlib3component0.component';

describe('Lib33childlib3component0Component', () => {
  let component: Lib33childlib3component0Component;
  let fixture: ComponentFixture<Lib33childlib3component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib33childlib3component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib33childlib3component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
