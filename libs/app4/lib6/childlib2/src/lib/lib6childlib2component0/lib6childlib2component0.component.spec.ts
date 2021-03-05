import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib2component0Component } from './lib6childlib2component0.component';

describe('Lib6childlib2component0Component', () => {
  let component: Lib6childlib2component0Component;
  let fixture: ComponentFixture<Lib6childlib2component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib6childlib2component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib2component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
