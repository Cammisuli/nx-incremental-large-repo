import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib35childlib3component0Component } from './lib35childlib3component0.component';

describe('Lib35childlib3component0Component', () => {
  let component: Lib35childlib3component0Component;
  let fixture: ComponentFixture<Lib35childlib3component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib35childlib3component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib35childlib3component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
