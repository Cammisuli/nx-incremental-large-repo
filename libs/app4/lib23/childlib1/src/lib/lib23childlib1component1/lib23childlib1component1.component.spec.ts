import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23childlib1component1Component } from './lib23childlib1component1.component';

describe('Lib23childlib1component1Component', () => {
  let component: Lib23childlib1component1Component;
  let fixture: ComponentFixture<Lib23childlib1component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib23childlib1component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23childlib1component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
