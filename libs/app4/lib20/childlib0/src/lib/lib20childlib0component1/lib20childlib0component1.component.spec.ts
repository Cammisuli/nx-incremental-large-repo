import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20childlib0component1Component } from './lib20childlib0component1.component';

describe('Lib20childlib0component1Component', () => {
  let component: Lib20childlib0component1Component;
  let fixture: ComponentFixture<Lib20childlib0component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib20childlib0component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20childlib0component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
