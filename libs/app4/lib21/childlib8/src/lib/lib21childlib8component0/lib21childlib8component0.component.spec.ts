import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21childlib8component0Component } from './lib21childlib8component0.component';

describe('Lib21childlib8component0Component', () => {
  let component: Lib21childlib8component0Component;
  let fixture: ComponentFixture<Lib21childlib8component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib21childlib8component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21childlib8component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
