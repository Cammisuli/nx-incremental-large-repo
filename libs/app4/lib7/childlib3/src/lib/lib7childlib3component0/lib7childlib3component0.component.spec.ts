import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib3component0Component } from './lib7childlib3component0.component';

describe('Lib7childlib3component0Component', () => {
  let component: Lib7childlib3component0Component;
  let fixture: ComponentFixture<Lib7childlib3component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib7childlib3component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib3component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
