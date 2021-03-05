import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21childlib8component1Component } from './lib21childlib8component1.component';

describe('Lib21childlib8component1Component', () => {
  let component: Lib21childlib8component1Component;
  let fixture: ComponentFixture<Lib21childlib8component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib21childlib8component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21childlib8component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
