import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib32childlib0component1Component } from './lib32childlib0component1.component';

describe('Lib32childlib0component1Component', () => {
  let component: Lib32childlib0component1Component;
  let fixture: ComponentFixture<Lib32childlib0component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib32childlib0component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib32childlib0component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
