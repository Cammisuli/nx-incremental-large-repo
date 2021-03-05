import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10childlib3component1Component } from './lib10childlib3component1.component';

describe('Lib10childlib3component1Component', () => {
  let component: Lib10childlib3component1Component;
  let fixture: ComponentFixture<Lib10childlib3component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib10childlib3component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10childlib3component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
