import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib37childlib2component0Component } from './lib37childlib2component0.component';

describe('Lib37childlib2component0Component', () => {
  let component: Lib37childlib2component0Component;
  let fixture: ComponentFixture<Lib37childlib2component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib37childlib2component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib37childlib2component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
