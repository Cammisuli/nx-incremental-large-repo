import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib31childlib1component1Component } from './lib31childlib1component1.component';

describe('Lib31childlib1component1Component', () => {
  let component: Lib31childlib1component1Component;
  let fixture: ComponentFixture<Lib31childlib1component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib31childlib1component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib31childlib1component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
