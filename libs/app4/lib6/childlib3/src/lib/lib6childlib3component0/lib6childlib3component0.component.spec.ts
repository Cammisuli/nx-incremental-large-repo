import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib3component0Component } from './lib6childlib3component0.component';

describe('Lib6childlib3component0Component', () => {
  let component: Lib6childlib3component0Component;
  let fixture: ComponentFixture<Lib6childlib3component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib6childlib3component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib3component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
