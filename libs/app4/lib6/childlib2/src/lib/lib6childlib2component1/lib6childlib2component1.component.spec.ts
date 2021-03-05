import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib2component1Component } from './lib6childlib2component1.component';

describe('Lib6childlib2component1Component', () => {
  let component: Lib6childlib2component1Component;
  let fixture: ComponentFixture<Lib6childlib2component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib6childlib2component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib2component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
