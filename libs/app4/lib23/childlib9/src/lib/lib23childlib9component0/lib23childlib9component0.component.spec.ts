import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23childlib9component0Component } from './lib23childlib9component0.component';

describe('Lib23childlib9component0Component', () => {
  let component: Lib23childlib9component0Component;
  let fixture: ComponentFixture<Lib23childlib9component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib23childlib9component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23childlib9component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
