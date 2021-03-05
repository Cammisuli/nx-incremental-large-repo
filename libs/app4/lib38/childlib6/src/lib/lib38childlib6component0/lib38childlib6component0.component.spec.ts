import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib38childlib6component0Component } from './lib38childlib6component0.component';

describe('Lib38childlib6component0Component', () => {
  let component: Lib38childlib6component0Component;
  let fixture: ComponentFixture<Lib38childlib6component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib38childlib6component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib38childlib6component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
