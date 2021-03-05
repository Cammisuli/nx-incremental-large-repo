import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24childlib3component1Component } from './lib24childlib3component1.component';

describe('Lib24childlib3component1Component', () => {
  let component: Lib24childlib3component1Component;
  let fixture: ComponentFixture<Lib24childlib3component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib24childlib3component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24childlib3component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
