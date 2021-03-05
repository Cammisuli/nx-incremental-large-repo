import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib0component1Component } from './lib8childlib0component1.component';

describe('Lib8childlib0component1Component', () => {
  let component: Lib8childlib0component1Component;
  let fixture: ComponentFixture<Lib8childlib0component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib8childlib0component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib0component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
