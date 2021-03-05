import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20childlib7component0Component } from './lib20childlib7component0.component';

describe('Lib20childlib7component0Component', () => {
  let component: Lib20childlib7component0Component;
  let fixture: ComponentFixture<Lib20childlib7component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib20childlib7component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20childlib7component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
