import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12childlib6component0Component } from './lib12childlib6component0.component';

describe('Lib12childlib6component0Component', () => {
  let component: Lib12childlib6component0Component;
  let fixture: ComponentFixture<Lib12childlib6component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib12childlib6component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12childlib6component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
