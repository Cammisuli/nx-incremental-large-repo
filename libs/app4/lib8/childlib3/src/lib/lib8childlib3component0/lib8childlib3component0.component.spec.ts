import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib3component0Component } from './lib8childlib3component0.component';

describe('Lib8childlib3component0Component', () => {
  let component: Lib8childlib3component0Component;
  let fixture: ComponentFixture<Lib8childlib3component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib8childlib3component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib3component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
