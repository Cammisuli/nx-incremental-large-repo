import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib5component1Component } from './lib5childlib5component1.component';

describe('Lib5childlib5component1Component', () => {
  let component: Lib5childlib5component1Component;
  let fixture: ComponentFixture<Lib5childlib5component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib5childlib5component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib5component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
