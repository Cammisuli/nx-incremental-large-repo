import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13childlib9component0Component } from './lib13childlib9component0.component';

describe('Lib13childlib9component0Component', () => {
  let component: Lib13childlib9component0Component;
  let fixture: ComponentFixture<Lib13childlib9component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib13childlib9component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13childlib9component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
