import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13childlib4component1Component } from './lib13childlib4component1.component';

describe('Lib13childlib4component1Component', () => {
  let component: Lib13childlib4component1Component;
  let fixture: ComponentFixture<Lib13childlib4component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib13childlib4component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13childlib4component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
