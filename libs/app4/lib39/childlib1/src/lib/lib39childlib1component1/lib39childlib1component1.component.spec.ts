import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib39childlib1component1Component } from './lib39childlib1component1.component';

describe('Lib39childlib1component1Component', () => {
  let component: Lib39childlib1component1Component;
  let fixture: ComponentFixture<Lib39childlib1component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib39childlib1component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib39childlib1component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
