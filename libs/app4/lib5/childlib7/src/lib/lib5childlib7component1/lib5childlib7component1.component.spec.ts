import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib7component1Component } from './lib5childlib7component1.component';

describe('Lib5childlib7component1Component', () => {
  let component: Lib5childlib7component1Component;
  let fixture: ComponentFixture<Lib5childlib7component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib5childlib7component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib7component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
