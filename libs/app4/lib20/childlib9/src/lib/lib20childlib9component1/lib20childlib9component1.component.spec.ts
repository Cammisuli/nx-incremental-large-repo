import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20childlib9component1Component } from './lib20childlib9component1.component';

describe('Lib20childlib9component1Component', () => {
  let component: Lib20childlib9component1Component;
  let fixture: ComponentFixture<Lib20childlib9component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib20childlib9component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20childlib9component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
