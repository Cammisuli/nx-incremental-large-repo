import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13childlib0component1Component } from './lib13childlib0component1.component';

describe('Lib13childlib0component1Component', () => {
  let component: Lib13childlib0component1Component;
  let fixture: ComponentFixture<Lib13childlib0component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib13childlib0component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13childlib0component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
