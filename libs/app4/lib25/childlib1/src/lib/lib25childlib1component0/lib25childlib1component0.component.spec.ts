import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25childlib1component0Component } from './lib25childlib1component0.component';

describe('Lib25childlib1component0Component', () => {
  let component: Lib25childlib1component0Component;
  let fixture: ComponentFixture<Lib25childlib1component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib25childlib1component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25childlib1component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
