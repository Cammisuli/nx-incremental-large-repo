import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16childlib5component1Component } from './lib16childlib5component1.component';

describe('Lib16childlib5component1Component', () => {
  let component: Lib16childlib5component1Component;
  let fixture: ComponentFixture<Lib16childlib5component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib16childlib5component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16childlib5component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
