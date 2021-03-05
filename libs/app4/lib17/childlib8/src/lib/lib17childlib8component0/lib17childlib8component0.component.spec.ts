import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17childlib8component0Component } from './lib17childlib8component0.component';

describe('Lib17childlib8component0Component', () => {
  let component: Lib17childlib8component0Component;
  let fixture: ComponentFixture<Lib17childlib8component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib17childlib8component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17childlib8component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
