import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24childlib8component0Component } from './lib24childlib8component0.component';

describe('Lib24childlib8component0Component', () => {
  let component: Lib24childlib8component0Component;
  let fixture: ComponentFixture<Lib24childlib8component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib24childlib8component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24childlib8component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
