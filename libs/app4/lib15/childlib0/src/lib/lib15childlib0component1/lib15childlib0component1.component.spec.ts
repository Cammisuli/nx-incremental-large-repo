import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15childlib0component1Component } from './lib15childlib0component1.component';

describe('Lib15childlib0component1Component', () => {
  let component: Lib15childlib0component1Component;
  let fixture: ComponentFixture<Lib15childlib0component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib15childlib0component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15childlib0component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
