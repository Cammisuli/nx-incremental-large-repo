import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib2component1Component } from './lib0childlib2component1.component';

describe('Lib0childlib2component1Component', () => {
  let component: Lib0childlib2component1Component;
  let fixture: ComponentFixture<Lib0childlib2component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0childlib2component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib2component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
