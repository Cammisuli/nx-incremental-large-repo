import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13childlib0component0Component } from './lib13childlib0component0.component';

describe('Lib13childlib0component0Component', () => {
  let component: Lib13childlib0component0Component;
  let fixture: ComponentFixture<Lib13childlib0component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib13childlib0component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13childlib0component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
