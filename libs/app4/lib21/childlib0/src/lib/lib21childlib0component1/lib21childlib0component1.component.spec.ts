import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21childlib0component1Component } from './lib21childlib0component1.component';

describe('Lib21childlib0component1Component', () => {
  let component: Lib21childlib0component1Component;
  let fixture: ComponentFixture<Lib21childlib0component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib21childlib0component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21childlib0component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
