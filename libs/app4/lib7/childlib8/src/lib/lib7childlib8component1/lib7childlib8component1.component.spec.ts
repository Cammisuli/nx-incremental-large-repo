import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib8component1Component } from './lib7childlib8component1.component';

describe('Lib7childlib8component1Component', () => {
  let component: Lib7childlib8component1Component;
  let fixture: ComponentFixture<Lib7childlib8component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib7childlib8component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib8component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
