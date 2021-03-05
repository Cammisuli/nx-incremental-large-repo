import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12childlib3component1Component } from './lib12childlib3component1.component';

describe('Lib12childlib3component1Component', () => {
  let component: Lib12childlib3component1Component;
  let fixture: ComponentFixture<Lib12childlib3component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib12childlib3component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12childlib3component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
