import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14childlib1component1Component } from './lib14childlib1component1.component';

describe('Lib14childlib1component1Component', () => {
  let component: Lib14childlib1component1Component;
  let fixture: ComponentFixture<Lib14childlib1component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib14childlib1component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14childlib1component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
