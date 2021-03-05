import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib0component0Component } from './lib9childlib0component0.component';

describe('Lib9childlib0component0Component', () => {
  let component: Lib9childlib0component0Component;
  let fixture: ComponentFixture<Lib9childlib0component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib9childlib0component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib0component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
