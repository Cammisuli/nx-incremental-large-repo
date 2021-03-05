import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15childlib8component1Component } from './lib15childlib8component1.component';

describe('Lib15childlib8component1Component', () => {
  let component: Lib15childlib8component1Component;
  let fixture: ComponentFixture<Lib15childlib8component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib15childlib8component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15childlib8component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
