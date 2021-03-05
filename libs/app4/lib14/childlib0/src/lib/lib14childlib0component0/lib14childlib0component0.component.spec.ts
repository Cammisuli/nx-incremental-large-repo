import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14childlib0component0Component } from './lib14childlib0component0.component';

describe('Lib14childlib0component0Component', () => {
  let component: Lib14childlib0component0Component;
  let fixture: ComponentFixture<Lib14childlib0component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib14childlib0component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14childlib0component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
