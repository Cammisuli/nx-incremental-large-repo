import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17childlib8component1Component } from './lib17childlib8component1.component';

describe('Lib17childlib8component1Component', () => {
  let component: Lib17childlib8component1Component;
  let fixture: ComponentFixture<Lib17childlib8component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib17childlib8component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17childlib8component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
