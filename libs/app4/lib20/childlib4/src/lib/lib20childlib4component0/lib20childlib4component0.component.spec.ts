import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20childlib4component0Component } from './lib20childlib4component0.component';

describe('Lib20childlib4component0Component', () => {
  let component: Lib20childlib4component0Component;
  let fixture: ComponentFixture<Lib20childlib4component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib20childlib4component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20childlib4component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
