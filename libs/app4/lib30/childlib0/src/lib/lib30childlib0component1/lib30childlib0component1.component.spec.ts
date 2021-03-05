import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib30childlib0component1Component } from './lib30childlib0component1.component';

describe('Lib30childlib0component1Component', () => {
  let component: Lib30childlib0component1Component;
  let fixture: ComponentFixture<Lib30childlib0component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib30childlib0component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib30childlib0component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
