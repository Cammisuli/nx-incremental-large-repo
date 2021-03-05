import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib32childlib9component1Component } from './lib32childlib9component1.component';

describe('Lib32childlib9component1Component', () => {
  let component: Lib32childlib9component1Component;
  let fixture: ComponentFixture<Lib32childlib9component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib32childlib9component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib32childlib9component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
