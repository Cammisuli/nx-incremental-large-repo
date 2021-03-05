import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16childlib7component0Component } from './lib16childlib7component0.component';

describe('Lib16childlib7component0Component', () => {
  let component: Lib16childlib7component0Component;
  let fixture: ComponentFixture<Lib16childlib7component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib16childlib7component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16childlib7component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
