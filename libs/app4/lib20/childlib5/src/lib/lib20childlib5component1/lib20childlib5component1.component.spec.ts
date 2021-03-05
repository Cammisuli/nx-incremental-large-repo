import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20childlib5component1Component } from './lib20childlib5component1.component';

describe('Lib20childlib5component1Component', () => {
  let component: Lib20childlib5component1Component;
  let fixture: ComponentFixture<Lib20childlib5component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib20childlib5component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20childlib5component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
