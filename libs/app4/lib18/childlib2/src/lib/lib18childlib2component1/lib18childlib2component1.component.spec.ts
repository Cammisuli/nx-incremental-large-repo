import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18childlib2component1Component } from './lib18childlib2component1.component';

describe('Lib18childlib2component1Component', () => {
  let component: Lib18childlib2component1Component;
  let fixture: ComponentFixture<Lib18childlib2component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib18childlib2component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18childlib2component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
