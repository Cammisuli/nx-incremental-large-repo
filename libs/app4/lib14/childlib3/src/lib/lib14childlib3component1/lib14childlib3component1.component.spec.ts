import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14childlib3component1Component } from './lib14childlib3component1.component';

describe('Lib14childlib3component1Component', () => {
  let component: Lib14childlib3component1Component;
  let fixture: ComponentFixture<Lib14childlib3component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib14childlib3component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14childlib3component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
