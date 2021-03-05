import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib7component1Component } from './lib6childlib7component1.component';

describe('Lib6childlib7component1Component', () => {
  let component: Lib6childlib7component1Component;
  let fixture: ComponentFixture<Lib6childlib7component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib6childlib7component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib7component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
