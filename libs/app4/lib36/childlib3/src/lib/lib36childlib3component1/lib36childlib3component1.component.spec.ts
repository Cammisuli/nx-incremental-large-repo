import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib36childlib3component1Component } from './lib36childlib3component1.component';

describe('Lib36childlib3component1Component', () => {
  let component: Lib36childlib3component1Component;
  let fixture: ComponentFixture<Lib36childlib3component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib36childlib3component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib36childlib3component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
