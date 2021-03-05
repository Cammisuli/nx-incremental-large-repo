import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib5component1Component } from './lib9childlib5component1.component';

describe('Lib9childlib5component1Component', () => {
  let component: Lib9childlib5component1Component;
  let fixture: ComponentFixture<Lib9childlib5component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib9childlib5component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib5component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
