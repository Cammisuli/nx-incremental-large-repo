import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23childlib8component0Component } from './lib23childlib8component0.component';

describe('Lib23childlib8component0Component', () => {
  let component: Lib23childlib8component0Component;
  let fixture: ComponentFixture<Lib23childlib8component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib23childlib8component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23childlib8component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
