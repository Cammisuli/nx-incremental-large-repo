import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21childlib0component0Component } from './lib21childlib0component0.component';

describe('Lib21childlib0component0Component', () => {
  let component: Lib21childlib0component0Component;
  let fixture: ComponentFixture<Lib21childlib0component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib21childlib0component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21childlib0component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
