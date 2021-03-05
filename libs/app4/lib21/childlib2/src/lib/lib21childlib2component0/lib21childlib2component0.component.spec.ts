import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21childlib2component0Component } from './lib21childlib2component0.component';

describe('Lib21childlib2component0Component', () => {
  let component: Lib21childlib2component0Component;
  let fixture: ComponentFixture<Lib21childlib2component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib21childlib2component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21childlib2component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
