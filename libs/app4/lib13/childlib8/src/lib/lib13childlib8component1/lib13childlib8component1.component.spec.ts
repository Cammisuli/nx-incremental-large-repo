import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13childlib8component1Component } from './lib13childlib8component1.component';

describe('Lib13childlib8component1Component', () => {
  let component: Lib13childlib8component1Component;
  let fixture: ComponentFixture<Lib13childlib8component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib13childlib8component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13childlib8component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
