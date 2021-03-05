import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib31childlib9component0Component } from './lib31childlib9component0.component';

describe('Lib31childlib9component0Component', () => {
  let component: Lib31childlib9component0Component;
  let fixture: ComponentFixture<Lib31childlib9component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib31childlib9component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib31childlib9component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
