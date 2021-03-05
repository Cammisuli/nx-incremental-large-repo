import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15childlib3component1Component } from './lib15childlib3component1.component';

describe('Lib15childlib3component1Component', () => {
  let component: Lib15childlib3component1Component;
  let fixture: ComponentFixture<Lib15childlib3component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib15childlib3component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15childlib3component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
