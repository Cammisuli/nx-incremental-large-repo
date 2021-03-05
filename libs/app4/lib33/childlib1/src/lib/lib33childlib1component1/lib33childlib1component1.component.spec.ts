import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib33childlib1component1Component } from './lib33childlib1component1.component';

describe('Lib33childlib1component1Component', () => {
  let component: Lib33childlib1component1Component;
  let fixture: ComponentFixture<Lib33childlib1component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib33childlib1component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib33childlib1component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
