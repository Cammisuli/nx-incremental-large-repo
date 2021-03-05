import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24childlib4component1Component } from './lib24childlib4component1.component';

describe('Lib24childlib4component1Component', () => {
  let component: Lib24childlib4component1Component;
  let fixture: ComponentFixture<Lib24childlib4component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib24childlib4component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24childlib4component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
