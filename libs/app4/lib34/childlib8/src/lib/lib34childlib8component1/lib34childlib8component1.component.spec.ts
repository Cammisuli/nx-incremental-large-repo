import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib34childlib8component1Component } from './lib34childlib8component1.component';

describe('Lib34childlib8component1Component', () => {
  let component: Lib34childlib8component1Component;
  let fixture: ComponentFixture<Lib34childlib8component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib34childlib8component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib34childlib8component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
