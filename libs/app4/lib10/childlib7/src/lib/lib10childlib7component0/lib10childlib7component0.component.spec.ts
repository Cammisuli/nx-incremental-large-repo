import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10childlib7component0Component } from './lib10childlib7component0.component';

describe('Lib10childlib7component0Component', () => {
  let component: Lib10childlib7component0Component;
  let fixture: ComponentFixture<Lib10childlib7component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib10childlib7component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10childlib7component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
