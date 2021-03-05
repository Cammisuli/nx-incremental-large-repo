import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib31childlib6component0Component } from './lib31childlib6component0.component';

describe('Lib31childlib6component0Component', () => {
  let component: Lib31childlib6component0Component;
  let fixture: ComponentFixture<Lib31childlib6component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib31childlib6component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib31childlib6component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
