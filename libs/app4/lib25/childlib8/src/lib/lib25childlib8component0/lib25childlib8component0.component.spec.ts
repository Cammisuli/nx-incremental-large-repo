import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25childlib8component0Component } from './lib25childlib8component0.component';

describe('Lib25childlib8component0Component', () => {
  let component: Lib25childlib8component0Component;
  let fixture: ComponentFixture<Lib25childlib8component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib25childlib8component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25childlib8component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
