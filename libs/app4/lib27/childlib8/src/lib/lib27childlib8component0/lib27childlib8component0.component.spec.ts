import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27childlib8component0Component } from './lib27childlib8component0.component';

describe('Lib27childlib8component0Component', () => {
  let component: Lib27childlib8component0Component;
  let fixture: ComponentFixture<Lib27childlib8component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib27childlib8component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27childlib8component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
