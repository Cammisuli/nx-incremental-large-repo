import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28childlib6component0Component } from './lib28childlib6component0.component';

describe('Lib28childlib6component0Component', () => {
  let component: Lib28childlib6component0Component;
  let fixture: ComponentFixture<Lib28childlib6component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib28childlib6component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28childlib6component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
