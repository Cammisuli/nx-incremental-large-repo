import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26childlib8component0Component } from './lib26childlib8component0.component';

describe('Lib26childlib8component0Component', () => {
  let component: Lib26childlib8component0Component;
  let fixture: ComponentFixture<Lib26childlib8component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib26childlib8component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26childlib8component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
