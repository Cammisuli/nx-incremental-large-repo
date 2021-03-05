import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15childlib8component0Component } from './lib15childlib8component0.component';

describe('Lib15childlib8component0Component', () => {
  let component: Lib15childlib8component0Component;
  let fixture: ComponentFixture<Lib15childlib8component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib15childlib8component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15childlib8component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
