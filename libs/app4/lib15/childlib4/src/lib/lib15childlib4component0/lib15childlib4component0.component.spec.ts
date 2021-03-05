import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15childlib4component0Component } from './lib15childlib4component0.component';

describe('Lib15childlib4component0Component', () => {
  let component: Lib15childlib4component0Component;
  let fixture: ComponentFixture<Lib15childlib4component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib15childlib4component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15childlib4component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
