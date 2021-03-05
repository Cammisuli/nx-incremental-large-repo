import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18childlib7component0Component } from './lib18childlib7component0.component';

describe('Lib18childlib7component0Component', () => {
  let component: Lib18childlib7component0Component;
  let fixture: ComponentFixture<Lib18childlib7component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib18childlib7component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18childlib7component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
