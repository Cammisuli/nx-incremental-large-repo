import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib38childlib5component0Component } from './lib38childlib5component0.component';

describe('Lib38childlib5component0Component', () => {
  let component: Lib38childlib5component0Component;
  let fixture: ComponentFixture<Lib38childlib5component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib38childlib5component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib38childlib5component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
