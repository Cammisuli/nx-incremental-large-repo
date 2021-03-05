import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib31childlib0component0Component } from './lib31childlib0component0.component';

describe('Lib31childlib0component0Component', () => {
  let component: Lib31childlib0component0Component;
  let fixture: ComponentFixture<Lib31childlib0component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib31childlib0component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib31childlib0component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
