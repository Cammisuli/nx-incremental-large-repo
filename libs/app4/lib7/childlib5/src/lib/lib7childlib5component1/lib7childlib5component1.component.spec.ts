import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib5component1Component } from './lib7childlib5component1.component';

describe('Lib7childlib5component1Component', () => {
  let component: Lib7childlib5component1Component;
  let fixture: ComponentFixture<Lib7childlib5component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib7childlib5component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib5component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
