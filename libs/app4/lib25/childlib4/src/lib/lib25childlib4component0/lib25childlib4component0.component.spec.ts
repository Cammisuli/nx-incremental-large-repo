import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25childlib4component0Component } from './lib25childlib4component0.component';

describe('Lib25childlib4component0Component', () => {
  let component: Lib25childlib4component0Component;
  let fixture: ComponentFixture<Lib25childlib4component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib25childlib4component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25childlib4component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
