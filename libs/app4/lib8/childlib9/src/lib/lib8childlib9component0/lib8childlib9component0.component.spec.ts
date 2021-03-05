import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib9component0Component } from './lib8childlib9component0.component';

describe('Lib8childlib9component0Component', () => {
  let component: Lib8childlib9component0Component;
  let fixture: ComponentFixture<Lib8childlib9component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib8childlib9component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib9component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
