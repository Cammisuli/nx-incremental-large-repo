import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib9component1Component } from './lib5childlib9component1.component';

describe('Lib5childlib9component1Component', () => {
  let component: Lib5childlib9component1Component;
  let fixture: ComponentFixture<Lib5childlib9component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib5childlib9component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib9component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
