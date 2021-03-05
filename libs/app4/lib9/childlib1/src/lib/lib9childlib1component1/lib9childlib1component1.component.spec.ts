import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib1component1Component } from './lib9childlib1component1.component';

describe('Lib9childlib1component1Component', () => {
  let component: Lib9childlib1component1Component;
  let fixture: ComponentFixture<Lib9childlib1component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib9childlib1component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib1component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
