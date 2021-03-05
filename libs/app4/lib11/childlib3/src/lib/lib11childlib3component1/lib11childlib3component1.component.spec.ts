import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11childlib3component1Component } from './lib11childlib3component1.component';

describe('Lib11childlib3component1Component', () => {
  let component: Lib11childlib3component1Component;
  let fixture: ComponentFixture<Lib11childlib3component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib11childlib3component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11childlib3component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
