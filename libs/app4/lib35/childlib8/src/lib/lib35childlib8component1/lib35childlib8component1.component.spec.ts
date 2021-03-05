import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib35childlib8component1Component } from './lib35childlib8component1.component';

describe('Lib35childlib8component1Component', () => {
  let component: Lib35childlib8component1Component;
  let fixture: ComponentFixture<Lib35childlib8component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib35childlib8component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib35childlib8component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
