import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20childlib1component1Component } from './lib20childlib1component1.component';

describe('Lib20childlib1component1Component', () => {
  let component: Lib20childlib1component1Component;
  let fixture: ComponentFixture<Lib20childlib1component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib20childlib1component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20childlib1component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
