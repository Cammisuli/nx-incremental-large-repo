import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib32childlib4component0Component } from './lib32childlib4component0.component';

describe('Lib32childlib4component0Component', () => {
  let component: Lib32childlib4component0Component;
  let fixture: ComponentFixture<Lib32childlib4component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib32childlib4component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib32childlib4component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
